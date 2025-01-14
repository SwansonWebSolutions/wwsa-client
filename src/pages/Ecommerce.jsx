import React from 'react'
import ServiceHeaderSection from '../components/ServiceHeaderSection'
import LogisticsSolutions from '../components/ecommerce/LogisiticsSolutions'
import ShippingOptions from '../components/ecommerce/ShippingOptions'
import SupportedIntegrations from '../components/ecommerce/SupportedIntegrations'
import CustomIntegrations from '../components/ecommerce/CustomIntegrations'
import EmailMessage from '../components/EmailMessage'
import WorkerImage from '../images/ecommerce-worker.jpg'
import { Helmet } from 'react-helmet'
function Ecommerce() {
  return (
    <>
    <Helmet>
      <title>E-commerce - WWSA</title>
      <meta name="description" content="Grow your ecommerce business globally with WWSA's flexible logistics solutions. Enjoy fast delivery, easy integrations, real-time tracking, and drop shipping options." />
      <link rel="canonical" href="https://www.wws-alliances.org/ecommerce" />
      <meta name="keywords" content="ecommerce, global ecommerce, commerce, shipping, logistics, international trade, freight solutions" />
    </Helmet>
    <div className='bg-navy-blue'>
        <ServiceHeaderSection
            title="Ecommerce"
            subtitle="It's never been easier to grow your ecommerce business anywhere in the world"
            description="Worldwide Strategic Alliances ”WWSA” network enables digital retailers of any size to provide their customers affordable, reliable, and fast delivery service around the US and to more than 220 countries and territories."
            linkText="Contact Us"
            linkTo="/contact"
            imageSrc={WorkerImage}
            imageAlt="Ecommerce Worker"
            />       
        <LogisticsSolutions />
        <ShippingOptions />
        <SupportedIntegrations />
        <CustomIntegrations />
        <EmailMessage />
    </div>
    </>
  )
}

export default Ecommerce