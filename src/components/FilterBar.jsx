export default function FilterBar({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusChange,
  totalCount,
  filteredCount,
}) {
  return (
    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
      <div className="app-toolbar-meta">
        <h2 className="app-subheading">All Bookings</h2>
        <p className="app-subheading-count">
          {filteredCount} of {totalCount} entries
        </p>
      </div>
      <div className="flex items-center gap-3">
        <select
          value={statusFilter}
          onChange={(e) => onStatusChange(e.target.value)}
          className="app-search"
        >
          <option value="All">All Status</option>
          <option value="Confirmed">Confirmed</option>
          <option value="In Transit">In Transit</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="app-search"
        />
      </div>
    </div>
  );
}
