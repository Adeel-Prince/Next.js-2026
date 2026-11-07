import { db } from "../../../../config/db.jsx";
import { cache } from "react";
export const dynamic = "force-dynamic"; // if you want to make the page dynamic then use this line!
const DynamicPage = async () => {
  const doctors = await getAllDoctors();
  return (
    <>
      <p>Total Doctors: {doctors.length}</p>
      <DoctorLists doctors={doctors} />
    </>
  );
};

export default DynamicPage;

const DoctorLists = async () => {
  const doctors = await getAllDoctors();
  return (
    <>
      <ul>
        {doctors.map((doctor) => {
          return <li key={doctor.DoctorID}> {doctor.FirstName}</li>;
        })}
        ;
      </ul>
    </>
  );
};

const getAllDoctors = cache(async () => {
  const [Doctors] = await db.execute("select * from doctors");
  console.log("Fetching doctors");
  return Doctors;
});
