import HeroSection from '../components/HeroSection';
import ServiceCards from '../components/ServiceCards';
import PricingTable from '../components/PricingTable';
import SearchBar from '../components/SearchBar';
import ContactForm from '../components/ContactForm';
import UserList from '../components/UserList';
const HomePage = () => {
  const handleSearch = (query) => {
    console.log('Search:', query);
  };

  return (
    <div>
      <HeroSection />
      <ServiceCards />
      <SearchBar onSearch={handleSearch} />
      <PricingTable />
      <UserList />
      <ContactForm />
    </div>
  );
};

export default HomePage;
