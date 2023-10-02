import PageHeader from '../../components/PageHeader/pageHeader';
import Input from '../../components/input';
import Select from '../../components/select';

export default function NewContact() {
  return (
    <>
      <PageHeader
        title="Novo Contato"
      />

      <Input type="text" placeholder="Nome" />
      <Select>
        <option value="123">Instagram</option>
      </Select>
    </>
  );
}
