import { db } from "../../../config/db.jsx";
import { Mail, Phone, MapPin, Calendar, Award, User } from "lucide-react";
import { notFound } from "next/navigation";

// Return a list of `params` to populate the [slug] dynamic segment

export async function generateStaticParams() {
  const [Doctors] = await db.execute(`select DoctorID from Doctors`);
  return Doctors.map((doctor) => ({ id: doctor.DoctorID.toString() }));
}

// [
//   { id: "1" },
//   { id: "2" },
//   { id: "3" }
// ]

const SingleDoctor = async (props) => {
  const params = await props.params;
  console.log("prams: ", params);

  const [[Doctors]] = await db.execute(
    `select * from Doctors where DoctorID = ?`,
    [params.id],
  );
  console.log("🚀 ~ SingleDoctor ~ doctor:", Doctors);

  //   const formatDate = (dateString) => {
  //     return new Date(dateString).toLocaleDateString("en-US", {
  //       year: "numeric",
  //       month: "long",
  //       day: "numeric",
  //     });
  //   };

  const getInitials = (firstName, lastName) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  };

  if (!Doctors) return notFound();

  // if (!doctor) return <h1>Doctor not found</h1>;

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-gray-100  overflow-hidden hover:shadow-xl transition-shadow duration-300 ">
        {/* Header with gradient */}
        <div className="bg-linear-to-r from-blue-600 to-purple-600 p-6 text-white">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-xl font-bold">
              {getInitials(Doctors.FirstName, Doctors.LastName)}
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                Dr. {Doctors.FirstName} {Doctors.LastName}
              </h2>
              <p className="text-blue-100 text-sm">{Doctors.Specialization}</p>
              <div className="flex items-center mt-1">
                <div
                  className={`w-2 h-2 rounded-full mr-2 ${
                    Doctors.is_active ? "bg-green-300" : "bg-red-300"
                  }`}
                ></div>
                <span className="text-xs">
                  {Doctors.is_active ? "Active" : "Inactive"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-gray-600">
              <Mail className="w-4 h-4 text-blue-500" />
              <span className="text-sm">{Doctors.Email}</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <Phone className="w-4 h-4 text-green-500" />
              <span className="text-sm">{Doctors.PhoneNo}</span>
            </div>
            <div className="flex items-start space-x-3 text-gray-600">
              <MapPin className="w-4 h-4 text-red-500 mt-0.5" />
              <div className="text-sm">
                <div>{Doctors.Address}</div>
                <div>
                  {Doctors.City}, {Doctors.Qualification}
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100"></div>

          {/* Professional Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-yellow-500" />
              <div>
                <div className="text-xs text-gray-500">Experience</div>
                <div className="text-sm font-medium text-gray-500">
                  {Doctors.ExperienceYears} years
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-purple-500" />
              <div>
                <div className="text-xs text-gray-500">ConsultationFee</div>
                <div className="text-sm font-medium text-gray-500">
                  {Doctors.ConsultationFee}
                </div>
              </div>
            </div>
          </div>

          {/* Dates */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-indigo-500" />
              <div>
                <div className="text-xs text-gray-500">AvailableDays</div>
                <div className="text-sm font-medium text-gray-500">
                  {Doctors.AvailableDays}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-3">
          <div className="text-xs text-gray-500">
            ID: {Doctors.DoctorID} • Gender: {Doctors.Gender}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDoctor;
