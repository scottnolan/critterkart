create table if not exists public.racer_votes (
  id bigint generated always as identity primary key,
  racer_index int not null check (racer_index >= 0 and racer_index <= 11),
  racer_name text not null,
  created_at timestamptz not null default now()
);

alter table public.racer_votes enable row level security;

drop policy if exists "Anyone can submit racer votes" on public.racer_votes;
create policy "Anyone can submit racer votes"
on public.racer_votes
for insert
to anon
with check (
  racer_index >= 0
  and racer_index <= 11
  and length(racer_name) > 0
  and length(racer_name) <= 80
);

drop policy if exists "Anyone can read racer votes" on public.racer_votes;
create policy "Anyone can read racer votes"
on public.racer_votes
for select
to anon
using (true);

create or replace view public.racer_vote_totals
with (security_invoker = true) as
select
  racer_index,
  count(*)::int as vote_count
from public.racer_votes
group by racer_index;

grant usage on schema public to anon;
grant insert, select on public.racer_votes to anon;
grant select on public.racer_vote_totals to anon;
