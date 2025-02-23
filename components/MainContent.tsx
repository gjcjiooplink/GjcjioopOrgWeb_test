'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhyChooseUs from '@/components/WhyChooseUs'
import PartnerCompanies from '@/components/PartnerCompanies'
import SpecialEvent from '@/components/SpecialEvent'
import Products from '@/components/Products'
import Services from '@/components/Services'
import CompanyHistory from '@/components/CompanyHistory'
import NewsSection from '@/components/NewsSection'
import Api from '@/components/Api'
import About from '@/components/About'
import Contact from '@/components/Contact'
import CommunityForum from '@/components/CommunityForum'
import Footer from '@/components/Footer'
import FloatingContact from '@/components/FloatingContact'

interface MainContentProps {
  settings: {
    enableChineseNewYearTheme: boolean;
    chineseNewYearTheme: {
      backgroundColor: string;
      buttonColor: string;
    };
  };
}

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function MainContent({ settings }: MainContentProps) {
  const themeClass = settings.enableChineseNewYearTheme ? 'chinese-new-year-theme' : '';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${themeClass}`}>
      <Header />
      <FloatingContact />
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.section variants={fadeInUp}>
          <Hero />
        </motion.section>
        <motion.section variants={fadeInUp}>
          <WhyChooseUs />
        </motion.section>
        <motion.section variants={fadeInUp}>
          <PartnerCompanies />
        </motion.section>
        <motion.section variants={fadeInUp}>
          <SpecialEvent settings={settings} />
        </motion.section>
        <motion.section variants={fadeInUp}>
          <Products settings={settings} />
        </motion.section>
        <motion.section variants={fadeInUp}>
          <Services settings={settings} />
        </motion.section>
        <motion.section variants={fadeInUp}>
          <CompanyHistory />
        </motion.section>
        <motion.section variants={fadeInUp}>
          <NewsSection />
        </motion.section>
        <motion.section variants={fadeInUp}>
          <Api />
        </motion.section>
        <motion.section variants={fadeInUp}>
          <About />
        </motion.section>
        <motion.section variants={fadeInUp}>
          <Contact />
        </motion.section>
        <motion.section variants={fadeInUp}>
          <CommunityForum />
        </motion.section>
      </motion.div>
      <Footer />
    </div>
  )
}

