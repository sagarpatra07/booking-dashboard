import { useState } from "react";
import "./App.css";
import { bookings } from "./data/bookings";
import FilterBar from "./components/FilterBar";
import BookingTable from "./components/BookingTable";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [expandedId, setExpandedId] = useState(null);

  const filteredData = bookings.filter((booking) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch = booking.customerName.toLowerCase().startsWith(query);
    const matchesStatus =
      statusFilter === "All" || booking.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="app-container">
      <h1 className="my-2 text-center text-4xl font-bold app-heading">
        Booking Log Dashboard
      </h1>
      <div className="mx-auto max-w-5xl">
        <FilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          statusFilter={statusFilter}
          onStatusChange={setStatusFilter}
          totalCount={bookings.length}
          filteredCount={filteredData.length}
        />
        <BookingTable
          bookings={filteredData}
          expandedId={expandedId}
          onToggleExpand={setExpandedId}
        />
      </div>
    </div>
  );
}

export default App;
