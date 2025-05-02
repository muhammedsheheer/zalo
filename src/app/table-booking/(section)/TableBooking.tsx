"use client";

import TableBookingForm from "@/app/table-booking/(section)/TableBookingForm";

const TableBooking = ({}) => {
  return (
    <div className="flex h-full w-full items-center justify-center gap-[1.2rem] bg-[#2c2323] py-12">
      <TableBookingForm />
    </div>
  );
};

export default TableBooking;
