import BookingRow from "./BookingRow";

export default function BookingTable({ bookings, expandedId, onToggleExpand }) {
  return (
    <div className="app-table-card overflow-x-auto">
      <table className="app-table w-full">
        <thead>
          <tr className="app-table-head">
            <th className="px-4 py-2 text-left">Booking ID</th>
            <th className="px-4 py-2 text-left">Customer Name</th>
            <th className="px-4 py-2 text-left">Pickup Location</th>
            <th className="px-4 py-2 text-left">Drop Location</th>
            <th className="px-4 py-2 text-left">Booking Status</th>
            <th className="px-4 py-2 text-left">Amount</th>
            <th className="px-4 py-2 text-left">Booking Date</th>
            <th className="px-4 py-2 text-center">More</th>
          </tr>
        </thead>
        <tbody>
          {bookings.length === 0 ? (
            <tr>
              <td colSpan={8} className="app-no-results px-4 py-6 text-center">
                No bookings found.
              </td>
            </tr>
          ) : (
            bookings.map((booking) => (
              <BookingRow
                key={booking.id}
                booking={booking}
                isExpanded={expandedId === booking.id}
                onToggle={() =>
                  onToggleExpand(expandedId === booking.id ? null : booking.id)
                }
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
