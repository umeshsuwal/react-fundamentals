export function formatDate(value) {
  return new Date(value).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

// Every month from the first to the last post, so months with 0 posts still show
export function getMonthKeys(posts) {
  const dates = posts.map((p) => p.publishedAt).sort();
  if (dates.length === 0) return [];

  const [startYear, startMonth] = dates[0].split('-').map(Number);
  const [endYear, endMonth] = dates[dates.length - 1].split('-').map(Number);

  const keys = [];
  let year = startYear;
  let month = startMonth;
  while (year < endYear || (year === endYear && month <= endMonth)) {
    keys.push(`${year}-${String(month).padStart(2, '0')}`);
    month += 1;
    if (month > 12) {
      month = 1;
      year += 1;
    }
  }
  return keys;
}

function formatMonth(key) {
  const [year, month] = key.split('-').map(Number);
  return new Date(Date.UTC(year, month - 1, 1)).toLocaleDateString('en-US', {
    month: 'short',
    year: '2-digit',
    timeZone: 'UTC',
  });
}

export function postsPerMonth(posts, monthKeys) {
  const counts = {};
  posts.forEach((p) => {
    const key = p.publishedAt.slice(0, 7);
    counts[key] = (counts[key] ?? 0) + 1;
  });
  return monthKeys.map((key) => ({
    label: formatMonth(key),
    posts: counts[key] ?? 0,
  }));
}

export function commentsByAuthor(posts) {
  const totals = {};
  posts.forEach((p) => {
    totals[p.author] = (totals[p.author] ?? 0) + p.comments;
  });
  return Object.entries(totals)
    .map(([author, comments]) => ({ author, comments }))
    .sort((a, b) => b.comments - a.comments);
}

export function getSummary(posts) {
  const totalComments = posts.reduce((sum, p) => sum + p.comments, 0);
  const byAuthor = commentsByAuthor(posts);

  return {
    totalPosts: posts.length,
    totalComments,
    average: posts.length ? (totalComments / posts.length).toFixed(1) : '0',
    topAuthor: byAuthor[0]?.author ?? '—',
  };
}