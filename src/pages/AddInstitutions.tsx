import { useGetPublicToken, useGetAvailableInstitutions } from "../utils/brick";
import "./AddInstitutions.css";
import { Link } from "react-router-dom"

const AddInstitutionCard = ({ institution }: { institution: any }) => {
  return (
    <div className="institution-card">
      <Link to="/ovo/getuserdata">
        <img
          src={
            institution.id === 12
              ? require("../assets/12.png")
              : institution.id === 11
                ? require("../assets/11.png")
                : ""
          }
          alt=""
          width={150}
        />
      </Link>
    </div>
  );
  //   automatic_verification: true
  //   bank_code: "KlikBCA Internet Banking"
  //   channels: null
  //   country_code: "ID"
  //   country_name: "Indonesia"
  //   createdAt: null
  //   id: 2
  //   institution_type: "Internet Banking"
  //   isOcrActive: false
  //   logo: null
  //   name: "KlikBCA Internet Banking"
  //   passbook_verification: true
  //   pdf_verification: true
  //   primary_color: "#0d3dc8"
  //   updatedAt: "2021-07-26T14:58:03.000+00:00"
};

const AddInstitutions = () => {
  // page yang isinya banyak institution buat di add
  const { token } = useGetPublicToken();

  const { institutions } = useGetAvailableInstitutions(token);

  return (
    <div className="flex flex-col items-center">
      <div className="w-[27rem] mt-10">
        <h1 className='font-bold text-3xl text-[#474646] mb-5'>Tambah Akun</h1>
      </div>
      {institutions?.map((institution: any) => {
        return <AddInstitutionCard institution={institution} />;
      })}
    </div>
  );
};

export default AddInstitutions;
