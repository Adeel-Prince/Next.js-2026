import { db } from "../../../config/db.jsx";
const StaticPage = async () => {
  const [Doctors] = await db.execute("select * from Doctors");
  console.log(Doctors);

  return (
    <>
      <ul>
        {Doctors.map((doctor) => {
          return <li key={doctor.DoctorID}> {doctor.FirstName}</li>;
        })}
      </ul>
    </>
  );
};
export default StaticPage;
