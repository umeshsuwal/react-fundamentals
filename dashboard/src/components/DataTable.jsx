import { useState } from 'react';
import Button from '../library/Button/Button';
import { formatDate } from '../utils/stats';

const PAGE_SIZE = 10;

const COLUMNS = [
  { key: 'title', label: 'Title' },
  { key: 'author', label: 'Author' },
  { key: 'category', label: 'Category' },
  { key: 'publishedAt', label: 'Published' },
  { key: 'comments', label: 'Comments', numeric: true },
];

function DataTable({ posts, total, page, onPageChange }) {
  const [sort, setSort] = useState({ key: 'publishedAt', direction: 'desc' });

  if (posts.length === 0) {
    return <p role="status">No posts match your filters.</p>;
  }

  const sorted = [...posts].sort((a, b) => {
    const result =
      typeof a[sort.key] === 'number'
        ? a[sort.key] - b[sort.key]
        : String(a[sort.key]).localeCompare(String(b[sort.key]));
    return sort.direction === 'asc' ? result : -result;
  });

  const pageCount = Math.ceil(sorted.length / PAGE_SIZE);
  const currentPage = Math.min(page, pageCount - 1);
  const start = currentPage * PAGE_SIZE;
  const rows = sorted.slice(start, start + PAGE_SIZE);

  function handleSort(key) {
    setSort((prev) => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
    onPageChange(0);
  }

  return (
    <>
      <div
        className="table-scroll"
        role="region"
        aria-label="Posts table"
        tabIndex={0}
      >
        <table>
          <caption>
            Showing {start + 1}-{start + rows.length} of {posts.length} posts
            ({total} in total). Select a column heading to sort.
          </caption>
          <thead>
            <tr>
              {COLUMNS.map((col) => {
                const active = sort.key === col.key;
                return (
                  <th
                    key={col.key}
                    scope="col"
                    className={col.numeric ? 'num' : undefined}
                    aria-sort={
                      active
                        ? sort.direction === 'asc'
                          ? 'ascending'
                          : 'descending'
                        : undefined
                    }
                  >
                    <button
                      type="button"
                      className="sort-btn"
                      onClick={() => handleSort(col.key)}
                    >
                      {col.label}
                      <span aria-hidden="true">
                        {active ? (sort.direction === 'asc' ? ' ▲' : ' ▼') : ''}
                      </span>
                    </button>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {rows.map((post) => (
              <tr key={post.id}>
                <th scope="row">{post.title}</th>
                <td>{post.author}</td>
                <td>{post.category}</td>
                <td>
                  <time dateTime={post.publishedAt}>
                    {formatDate(post.publishedAt)}
                  </time>
                </td>
                <td className="num">{post.comments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {pageCount > 1 && (
        <nav className="pagination" aria-label="Table pagination">
          <Button
            variant="secondary"
            disabled={currentPage === 0}
            onClick={() => onPageChange(currentPage - 1)}
          >
            Previous
          </Button>
          <span>
            Page {currentPage + 1} of {pageCount}
          </span>
          <Button
            variant="secondary"
            disabled={currentPage >= pageCount - 1}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </Button>
        </nav>
      )}
    </>
  );
}

export default DataTable;