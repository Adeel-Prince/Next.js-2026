import { db } from "../../../../config/db.jsx";
export const revalidate = 10; //if you want to make the page dynamic then use this line!

const StaticPage = async () => {
  const [Doctors] = await db.execute("select * from Doctors");
  // console.log("Static doctors");

  return (
    <>
      <ul>
        {Doctors.map((doctor) => {
          return <li key={doctor.DoctorID}> {doctor.FirstName}</li>;
        })}
        ;
      </ul>
    </>
  );
};

export default StaticPage;
