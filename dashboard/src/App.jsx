import { useState } from 'react';
import useFetch from './hooks/useFetch';
import { API_URL, normalizePosts } from './api';
import { getMonthKeys } from './utils/stats';
import Button from './library/Button/Button';
import StatCards from './components/StatCards';
import FilterBar from './components/FilterBar';
import CommentsByAuthorChart from './components/CommentsByAuthorChart';
import PostsOverTimeChart from './components/PostsOverTimeChart';
import DataTable from './components/DataTable';

const EMPTY_FILTERS = { search: '', author: '', category: '', from: '', to: '' };

function App() {
  const { data: raw, loading, error } = useFetch(API_URL);
  const [filters, setFilters] = useState(EMPTY_FILTERS);
  const [page, setPage] = useState(0);

  const posts = raw ? normalizePosts(raw) : [];
  const authors = [...new Set(posts.map((p) => p.author))].sort();
  const categories = [...new Set(posts.map((p) => p.category))].sort();
  const monthKeys = getMonthKeys(posts);

  const dateError =
    filters.from && filters.to && filters.from > filters.to
      ? 'End date must be on or after the start date'
      : '';

  const filtered = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(filters.search.toLowerCase()) &&
      (filters.author === '' || p.author === filters.author) &&
      (filters.category === '' || p.category === filters.category) &&
      (filters.from === '' || p.publishedAt >= filters.from) &&
      (filters.to === '' || p.publishedAt <= filters.to)
  );

  function updateFilter(name, value) {
    setFilters((prev) => ({ ...prev, [name]: value }));
    setPage(0);
  }

  function clearFilters() {
    setFilters(EMPTY_FILTERS);
    setPage(0);
  }

  return (
    <>
      <header className="topbar">
        <h1>Blog Dashboard</h1>
        <p>Posts, comments and authors at a glance</p>
      </header>

      <main className="container">
        {loading && <p role="status">Loading posts...</p>}

        {error && (
          <div className="panel">
            <p role="alert">Could not load posts: {error.message}</p>
            <Button onClick={() => window.location.reload()}>Try again</Button>
          </div>
        )}

        {!loading && !error && (
          <>
            <section aria-labelledby="summary-heading">
              <h2 id="summary-heading" className="visually-hidden">
                Summary
              </h2>
              <StatCards posts={filtered} />
            </section>

            <section className="panel" aria-labelledby="filters-heading">
              <h2 id="filters-heading">Filters</h2>
              <FilterBar
                filters={filters}
                onChange={updateFilter}
                authors={authors}
                categories={categories}
                dateError={dateError}
                onClear={clearFilters}
              />
              <p className="results-count" role="status">
                {filtered.length} of {posts.length} posts match your filters
              </p>
            </section>

            <div className="chart-grid">
              <section className="panel" aria-labelledby="authors-heading">
                <h2 id="authors-heading">Comments by author</h2>
                <CommentsByAuthorChart posts={filtered} />
              </section>

              <section className="panel" aria-labelledby="time-heading">
                <h2 id="time-heading">Posts over time</h2>
                <PostsOverTimeChart posts={filtered} monthKeys={monthKeys} />
              </section>
            </div>

            <section className="panel" aria-labelledby="table-heading">
              <h2 id="table-heading">Posts</h2>
              <DataTable
                posts={filtered}
                total={posts.length}
                page={page}
                onPageChange={setPage}
              />
            </section>
          </>
        )}
      </main>
    </>
  );
}

export default App;