import { useGetPublicToken, useGetAvailableInstitutions } from "../utils/brick";
import AddInstitutionCard from "../components/AddInstitutionCard";
const AddInstitutions = () => {
  // page yang isinya banyak institution buat di add
  const { token } = useGetPublicToken();

  const { institutions } = useGetAvailableInstitutions(token);

  return (
    <div>
      <div className="text-xl">add instituions</div>
      {institutions?.map((institution: any) => {
        return <AddInstitutionCard institution={institution} />;
      })}
    </div>
  );
};

export default AddInstitutions;
