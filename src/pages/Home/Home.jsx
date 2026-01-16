import AvailableLoans from '../../components/HomeComponents/AvailableLoans/AvailableLoans'
import CategoriesSection from '../../components/HomeComponents/CategoriesSection/CategoriesSection'
import CustomerFeedback from '../../components/HomeComponents/CustomerFeedback/CustomerFeedback'
import FAQSection from '../../components/HomeComponents/FAQSection/FAQSection'
import HeroBanner from '../../components/HomeComponents/HeroBanner/HeroBanner'
import HighlightsSection from '../../components/HomeComponents/HighlightsSection/HighlightsSection'
import HowItWorks from '../../components/HomeComponents/HowItWorks/HowItWorks'
import NewsletterSection from '../../components/HomeComponents/NewsletterSection/NewsletterSection'
import ServicesSection from '../../components/HomeComponents/ServicesSection/ServicesSection'
import WhyChooseUs from '../../components/HomeComponents/WhyChooseUs/WhyChooseUs'

const Home = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <AvailableLoans></AvailableLoans>
      <ServicesSection></ServicesSection>
      <HighlightsSection></HighlightsSection>
      <HowItWorks></HowItWorks>
      <CategoriesSection></CategoriesSection>
      <CustomerFeedback></CustomerFeedback>
      <WhyChooseUs></WhyChooseUs>
      <FAQSection></FAQSection>
      <NewsletterSection></NewsletterSection>
    </div>
  )
}

export default Home
