-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 02, 2026 at 06:45 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `voting_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `candidate_models`
--

CREATE TABLE `candidate_models` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `nickName` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `candidate_models`
--

INSERT INTO `candidate_models` (`id`, `fullname`, `nickName`, `department`, `position`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Peter Obi', 'akute', 'ADC', 'president', 'uploads/1776889163.jpg', '2026-04-22 19:19:23', '2026-04-22 19:19:23'),
(2, 'Tinubu', 'renw Hope', 'APC', 'president', 'uploads/1776889258.jpg', '2026-04-22 19:20:58', '2026-04-22 19:20:58');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(25, '0001_01_01_000000_create_users_table', 1),
(26, '0001_01_01_000001_create_cache_table', 1),
(27, '0001_01_01_000002_create_jobs_table', 1),
(28, '2026_04_18_100857_add_role_to_users_table', 1),
(29, '2026_04_18_125357_create_candidate_models_table', 1),
(30, '2026_04_20_170059_add_has_voted_to_users_table', 1),
(31, '2026_04_20_171015_create_votes_table', 1),
(32, '2026_04_22_200701_create_personal_access_tokens_table', 1),
(33, '2026_04_23_065152_add_user_id_to_votes_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` text NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'auth_token', '015edb663489c6f3aa34da1bde99d431caaa45d3574b8f5951bb046f7cea69ed', '[\"*\"]', NULL, NULL, '2026-04-22 19:11:11', '2026-04-22 19:11:11'),
(2, 'App\\Models\\User', 1, 'auth_token', '088b0dfe901616467b94e69eb584ef2ff81a90f23c2e046593df39168f215244', '[\"*\"]', '2026-04-22 19:21:56', NULL, '2026-04-22 19:12:08', '2026-04-22 19:21:56'),
(3, 'App\\Models\\User', 1, 'auth_token', '3b5a2724eadee989c4cfa3a81620507b1e4b1c0d94a602b4d82c93542d628bbc', '[\"*\"]', '2026-04-22 19:30:57', NULL, '2026-04-22 19:23:53', '2026-04-22 19:30:57'),
(4, 'App\\Models\\User', 1, 'auth_token', 'ff1116142d0d3056c827963bc29ce08af7d0873d49cf30ed9086f2957e0615c7', '[\"*\"]', '2026-04-23 05:11:10', NULL, '2026-04-23 05:10:55', '2026-04-23 05:11:10'),
(5, 'App\\Models\\User', 1, 'auth_token', '1342ced2bbaad950a2965c9cd04ece9c9949753fd43c7457473dc2cca7bad745', '[\"*\"]', '2026-04-23 05:31:16', NULL, '2026-04-23 05:30:26', '2026-04-23 05:31:16'),
(6, 'App\\Models\\User', 1, 'auth_token', 'a56e2ba84effea0c5b2901db58d853e3039a02d4ca1548289c42c6bdd0057841', '[\"*\"]', '2026-04-23 05:54:47', NULL, '2026-04-23 05:46:04', '2026-04-23 05:54:47'),
(7, 'App\\Models\\User', 1, 'auth_token', '30efa3a3e2eaf56c590dfc0dafec3fc310f756e1757aedc719793c111c89847b', '[\"*\"]', NULL, NULL, '2026-04-23 05:57:29', '2026-04-23 05:57:29'),
(8, 'App\\Models\\User', 1, 'auth_token', '6765ba9de60989a993eb48dc5efb7d86cbc227a80e45f0cfde526615b5c53df2', '[\"*\"]', NULL, NULL, '2026-04-23 05:58:58', '2026-04-23 05:58:58'),
(9, 'App\\Models\\User', 1, 'auth_token', 'd77d19bbc5f84ea9931f8c26e1e80d77c5606af806922c62ce293104375c1921', '[\"*\"]', '2026-05-01 17:54:29', NULL, '2026-04-23 06:00:14', '2026-05-01 17:54:29'),
(10, 'App\\Models\\User', 1, 'auth_token', '07e5a37984da710774b11756b2133d454da72ada6166845ecc79b75da0bb79bd', '[\"*\"]', NULL, NULL, '2026-05-01 17:55:26', '2026-05-01 17:55:26'),
(11, 'App\\Models\\User', 1, 'auth_token', '6fdc4e814bc5aef5e1cab447f229e78b1bb1f099e04ccbf3687a22b5e0e71a06', '[\"*\"]', NULL, NULL, '2026-05-01 17:58:53', '2026-05-01 17:58:53'),
(12, 'App\\Models\\User', 1, 'auth_token', '1a65b76b72aba1f2c3697cb5ce0e9d4af66b9ba8e0ee83cf288ba5923f44697e', '[\"*\"]', NULL, NULL, '2026-05-01 18:06:57', '2026-05-01 18:06:57'),
(13, 'App\\Models\\User', 1, 'auth_token', '91e249c91f95fb6f05024f709af3c09d2cfe89844f779e0ea911cc8901cfbace', '[\"*\"]', '2026-05-01 19:59:41', NULL, '2026-05-01 18:09:32', '2026-05-01 19:59:41'),
(14, 'App\\Models\\User', 2, 'auth_token', '469e59dc69a11c30e23f382b6ce56cdf16d118fab6a08944af10d920650cbe96', '[\"*\"]', NULL, NULL, '2026-05-01 20:20:54', '2026-05-01 20:20:54'),
(15, 'App\\Models\\User', 2, 'auth_token', '4f7a8613b3dd0bbbe3d8305fbd4bfa5624f05466633164e8ee0b8deccbad2b6f', '[\"*\"]', '2026-05-02 05:13:44', NULL, '2026-05-02 05:10:03', '2026-05-02 05:13:44'),
(16, 'App\\Models\\User', 3, 'auth_token', 'abee1c22b714157ab1dd476fb38336cd1811cbd69b90f01a7e63fea9bc0591f7', '[\"*\"]', '2026-05-02 05:18:39', NULL, '2026-05-02 05:18:17', '2026-05-02 05:18:39'),
(17, 'App\\Models\\User', 4, 'auth_token', 'd498884f4ff8e4be46b62756560e4e0ef5e593305701427f8dd9ef9f2121dcaa', '[\"*\"]', '2026-05-02 05:36:36', NULL, '2026-05-02 05:36:09', '2026-05-02 05:36:36'),
(18, 'App\\Models\\User', 5, 'auth_token', '02c2f788c3474b8e754599a7fd93c6dbb910b1c0ed4f67dfdbf686c764fa403d', '[\"*\"]', '2026-05-02 05:47:37', NULL, '2026-05-02 05:45:42', '2026-05-02 05:47:37'),
(19, 'App\\Models\\User', 1, 'auth_token', '06c57e3cde2e505baf3dd211684dab3a7a1b976e7e85dd602bd23446ad5e8c91', '[\"*\"]', NULL, NULL, '2026-05-02 05:50:28', '2026-05-02 05:50:28'),
(20, 'App\\Models\\User', 1, 'auth_token', '19080a6d0198c7474e08c9727956343c6bd70c542e85fbdb771230c9908e8eed', '[\"*\"]', '2026-05-02 05:56:13', NULL, '2026-05-02 05:54:51', '2026-05-02 05:56:13'),
(21, 'App\\Models\\User', 1, 'auth_token', 'ffa27e2003199c4fe10ff06842c8f89d544b26ddbde3684c4c97d55c3131f5ff', '[\"*\"]', NULL, NULL, '2026-05-02 06:00:38', '2026-05-02 06:00:38'),
(22, 'App\\Models\\User', 4, 'auth_token', '7a6b7f768420ed876db65dd889c2df20e9d2b8984e1f8ff5396a216649507e3b', '[\"*\"]', '2026-05-02 17:00:28', NULL, '2026-05-02 06:05:32', '2026-05-02 17:00:28');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('5ACHu0oGam2IyFCazhcdEDaRsYNu7lhqMWLo8Ol8', NULL, '10.174.90.143', 'okhttp/4.12.0', 'eyJfdG9rZW4iOiI3UmtlY0s2Vm1HM2RFTWFXYXZ6bklKekdJREt5Nko2RFdBWDFxb2h5IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cLzEwLjE3NC45MC4xNDM6ODAwMFwvbG9naW4iLCJyb3V0ZSI6ImxvZ2luIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1776926856);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `level` varchar(255) NOT NULL,
  `matNo` varchar(255) NOT NULL,
  `pin` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'voter',
  `has_voted` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullName`, `phoneNumber`, `department`, `level`, `matNo`, `pin`, `email`, `password`, `remember_token`, `created_at`, `updated_at`, `role`, `has_voted`) VALUES
(1, 'Emmanuel Ogbebor', '07032446095', 'Admin', 'HND2', '31134331233313', '246', 'a@gmail.com', '$2y$12$UpyHvsnUmX4f11jVDVS00uyj2EPkBpgTu9.FsyoJDKgQPgXSxKSLS', NULL, '2026-04-22 19:10:20', '2026-04-22 19:10:20', 'admin', 0),
(2, 'Philip Adebayo', '08032446095', 'Data science', 'HND1', 'AST/23559', '2468', 'b@gmail.com', '$2y$12$0hbtU.uETNBnu.vCydF2WuhkmFerFLkCfrb8tljaUqpAWE33GO3VC', NULL, '2026-05-01 20:05:19', '2026-05-01 20:05:19', 'voter', 0),
(3, 'peer ilesanmi', '0803244095', 'Medical', 'HND2', '23434345445444545454', '246810', 'p@gmail.com', '$2y$12$LwXz5lvKhdGykeC4drdBnOS/K.1zHLGCrOiOxyTIwQCbRlqy0U4kW', NULL, '2026-05-02 05:17:53', '2026-05-02 05:17:53', 'voter', 0),
(4, 'Israel Ogbebor', '3444542442443', 'Healths', 'HND2', '44344234', '24681012', 'i@gmail.com', '$2y$12$O3pHF/d.7dfEWzSzaCsoqOSIcrtlFrV5JBaizR5u.fZz5ebDffw5C', NULL, '2026-05-02 05:35:45', '2026-05-02 05:35:45', 'voter', 0),
(5, 'Divine Emmanuel', '0703458545', 'computer', 'ND2', '323123322323', '2468101214', 'd@gmail.com', '$2y$12$pCZo/mmCWW6O0Z/iibSCYe.o0N91IZ40U3V7aplLdj1/3JHDAc.Ta', NULL, '2026-05-02 05:44:34', '2026-05-02 05:44:34', 'voter', 0);

-- --------------------------------------------------------

--
-- Table structure for table `votes`
--

CREATE TABLE `votes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `candidate_id` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `votes`
--

INSERT INTO `votes` (`id`, `user_id`, `candidate_id`, `created_at`, `updated_at`) VALUES
(1, 1, '1', '2026-04-23 05:54:47', '2026-04-23 05:54:47'),
(2, 2, '2', '2026-05-02 05:13:44', '2026-05-02 05:13:44'),
(3, 3, '2', '2026-05-02 05:18:39', '2026-05-02 05:18:39'),
(4, 4, '1', '2026-05-02 05:36:37', '2026-05-02 05:36:37'),
(5, 5, '1', '2026-05-02 05:47:37', '2026-05-02 05:47:37');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_expiration_index` (`expiration`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_locks_expiration_index` (`expiration`);

--
-- Indexes for table `candidate_models`
--
ALTER TABLE `candidate_models`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`),
  ADD KEY `personal_access_tokens_expires_at_index` (`expires_at`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_matno_unique` (`matNo`),
  ADD UNIQUE KEY `users_pin_unique` (`pin`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `votes`
--
ALTER TABLE `votes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `votes_user_id_foreign` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `candidate_models`
--
ALTER TABLE `candidate_models`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `votes`
--
ALTER TABLE `votes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `votes`
--
ALTER TABLE `votes`
  ADD CONSTRAINT `votes_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
