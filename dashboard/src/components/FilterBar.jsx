import Button from '../library/Button/Button';
import TextInput from '../library/TextInput/TextInput';
import Select from '../library/Select/Select';

function FilterBar({
  filters,
  onChange,
  authors,
  categories,
  dateError,
  onClear,
}) {
  const authorOptions = [
    { value: '', label: 'All authors' },
    ...authors.map((name) => ({ value: name, label: name })),
  ];
  const categoryOptions = [
    { value: '', label: 'All categories' },
    ...categories.map((name) => ({ value: name, label: name })),
  ];

  return (
    <div className="filter-bar">
      <TextInput
        label="Search titles"
        type="search"
        value={filters.search}
        onChange={(e) => onChange('search', e.target.value)}
      />
      <Select
        label="Author"
        options={authorOptions}
        value={filters.author}
        onChange={(e) => onChange('author', e.target.value)}
      />
      <Select
        label="Category"
        options={categoryOptions}
        value={filters.category}
        onChange={(e) => onChange('category', e.target.value)}
      />
      <TextInput
        label="From date"
        type="date"
        value={filters.from}
        onChange={(e) => onChange('from', e.target.value)}
      />
      <TextInput
        label="To date"
        type="date"
        value={filters.to}
        onChange={(e) => onChange('to', e.target.value)}
        error={dateError}
      />
      <Button variant="secondary" onClick={onClear}>
        Clear filters
      </Button>
    </div>
  );
}

export default FilterBar;