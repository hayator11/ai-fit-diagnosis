alter table ai_reviews
  alter column good_points set default '{}',
  alter column bad_points set default '{}',
  alter column recommended_for set default '{}';

update ai_reviews
set
  good_points = coalesce(good_points, '{}'),
  bad_points = coalesce(bad_points, '{}'),
  recommended_for = coalesce(recommended_for, '{}');
