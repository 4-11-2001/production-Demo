-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: medical_history
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `medical-forms`
--

DROP TABLE IF EXISTS `medical-forms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medical-forms` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `PatientName` varchar(255) NOT NULL,
  `NickName` varchar(255) DEFAULT NULL,
  `Age` varchar(255) NOT NULL,
  `NameofPhysicianAndThierSpeciality` varchar(255) NOT NULL,
  `MostRecentPhysicalExamination` varchar(255) DEFAULT NULL,
  `Purpose` varchar(255) DEFAULT NULL,
  `WhatIsYourEstimateOfYourGeneralHealth` varchar(255) DEFAULT NULL,
  `hospitalizationForIllnessOrInjury` tinyint(1) DEFAULT NULL,
  `heartProblemsOrCardiacStentWithinTheLastSixMonths` tinyint(1) DEFAULT NULL,
  `historyOfInfectiveEndocartis` tinyint(1) DEFAULT NULL,
  `artificialHeartValveRepairedHeartDefect` tinyint(1) DEFAULT NULL,
  `pacemakerOrImplantableDefibrillator` tinyint(1) DEFAULT NULL,
  `artificialProthesis` tinyint(1) DEFAULT NULL,
  `rheumaticOrScarletFever` tinyint(1) DEFAULT NULL,
  `highOrLowBloodPressure` tinyint(1) DEFAULT NULL,
  `aStroke` tinyint(1) DEFAULT NULL,
  `anemiaOrOtherBloodDisorder` tinyint(1) DEFAULT NULL,
  `prolongedBleedingDuetoSlightCut` tinyint(1) DEFAULT NULL,
  `emphysemaShortnessOfBreathSarcoidosis` tinyint(1) DEFAULT NULL,
  `tuberculosisMeaslesChickenPox` tinyint(1) DEFAULT NULL,
  `asthma` tinyint(1) DEFAULT NULL,
  `breathingOrSleepProblems` tinyint(1) DEFAULT NULL,
  `kidneyDisease` tinyint(1) DEFAULT NULL,
  `liverDisease` tinyint(1) DEFAULT NULL,
  `jaundice` tinyint(1) DEFAULT NULL,
  `thyroidParathyroidDiseaseOrCalciumDeficiency` tinyint(1) DEFAULT NULL,
  `hormoneDeficiency` tinyint(1) DEFAULT NULL,
  `highCholestrolOrTakingStatinDrugs` tinyint(1) DEFAULT NULL,
  `diabetesHbA1c` varchar(255) DEFAULT NULL,
  `stomachOrDuodenalUlcer` tinyint(1) DEFAULT NULL,
  `digestiveDisorders` tinyint(1) DEFAULT NULL,
  `osteoporosisOsteopenia` tinyint(1) DEFAULT NULL,
  `arthritisRheumatiodArthrisisLupus` tinyint(1) DEFAULT NULL,
  `glaucoma` tinyint(1) DEFAULT NULL,
  `contactLenses` tinyint(1) DEFAULT NULL,
  `headOrNeckInjuries` tinyint(1) DEFAULT NULL,
  `epilepsyConvulsions` tinyint(1) DEFAULT NULL,
  `neurologicDisorders` tinyint(1) DEFAULT NULL,
  `viralInfectionsAndColdSores` tinyint(1) DEFAULT NULL,
  `anyLumpsOrSwellingInTheMouth` tinyint(1) DEFAULT NULL,
  `hivesSkinRashHayFever` tinyint(1) DEFAULT NULL,
  `STI_STD` tinyint(1) DEFAULT NULL,
  `hepatitisType` varchar(255) DEFAULT NULL,
  `HIV_AIDS` tinyint(1) DEFAULT NULL,
  `tumorAbnormalGrowth` tinyint(1) DEFAULT NULL,
  `radiationTherapy` tinyint(1) DEFAULT NULL,
  `chemotherapyImmunosuppressive` tinyint(1) DEFAULT NULL,
  `emotionalProblems` tinyint(1) DEFAULT NULL,
  `pshychiatricTreatment` tinyint(1) DEFAULT NULL,
  `antidepressantMedication` tinyint(1) DEFAULT NULL,
  `alcohol_StreetDrugUse` tinyint(1) DEFAULT NULL,
  `presentlyBeingTreatedForAnyOtherIllness` tinyint(1) DEFAULT NULL,
  `awareOfAChangeInYourHealthInTheLast24Hours` tinyint(1) DEFAULT NULL,
  `takingMedicationForWeightManagement` tinyint(1) DEFAULT NULL,
  `takingdietarysupplements` tinyint(1) DEFAULT NULL,
  `oftenExhaustedOrFatigued` tinyint(1) DEFAULT NULL,
  `expereincingFrequentHeadaches` tinyint(1) DEFAULT NULL,
  `ASmoker_smokedPreviouslyOrUseSmokelesstobacco` tinyint(1) DEFAULT NULL,
  `consideredATouchyPerson` tinyint(1) DEFAULT NULL,
  `oftenUnhappyOrDepressed` tinyint(1) DEFAULT NULL,
  `FEMALE_takingBirthControlPills` tinyint(1) DEFAULT NULL,
  `FEMALE_pregnant` tinyint(1) DEFAULT NULL,
  `MALE_prostateDisorders` tinyint(1) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `medical-forms_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medical-forms`
--

LOCK TABLES `medical-forms` WRITE;
/*!40000 ALTER TABLE `medical-forms` DISABLE KEYS */;
/*!40000 ALTER TABLE `medical-forms` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-08 13:19:15
