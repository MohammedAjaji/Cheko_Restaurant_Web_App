--
-- PostgreSQL database dump
--

-- Dumped from database version 15.5 (Homebrew)
-- Dumped by pg_dump version 15.5 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: menu; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.menu (
    id integer NOT NULL,
    name character varying NOT NULL,
    description character varying NOT NULL,
    price double precision NOT NULL,
    image character varying NOT NULL,
    calorie integer NOT NULL,
    category character varying NOT NULL,
    lat double precision NOT NULL,
    lng double precision NOT NULL,
    restaurant_id integer
);


ALTER TABLE public.menu OWNER TO postgres;

--
-- Name: restaurant; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.restaurant (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    rating double precision NOT NULL,
    rating_count bigint NOT NULL,
    url character varying NOT NULL,
    hours24 boolean NOT NULL,
    lat double precision NOT NULL,
    lng double precision NOT NULL
);


ALTER TABLE public.restaurant OWNER TO postgres;

--
-- Data for Name: menu; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.menu (id, name, description, price, image, calorie, category, lat, lng, restaurant_id) FROM stdin;
22	creation	Blanditiis vero eveniet ducimus. Eius sit repudiandae aut. Iste voluptatibus vero. Nam deserunt sapiente harum fugit quisquam eaque sequi qui.	445	https://loremflickr.com/640/480/food	20	Soups	-16.0056	-158.6296	17
6	ashram	Iusto neque excepturi at sunt voluptatibus accusamus quidem. Corrupti ea ducimus non animi maxime. Aspernatur magni dolorem nulla explicabo natus.	318	https://loremflickr.com/640/480/food	30	Breakfast	74.8985	178.8602	10
13	apparel	Iusto facere fuga. Quod magnam vel. Quod iste optio praesentium repudiandae sequi esse unde dolor.	787	https://loremflickr.com/640/480/food	19	Drinks	56.7437	69.6026	22
32	operation	Sapiente fuga sequi cum hic adipisci odit. Dolore esse cum tempora dolor fugit molestias reiciendis qui. Deserunt sit ipsum provident repudiandae recusandae iure vitae veritatis illum.	547	https://loremflickr.com/640/480/food	3	Sushi	53.0114	-104.4637	8
38	hug	Magni voluptas possimus vero rem possimus a maiores occaecati. Natus totam dolor eligendi ad.	259	https://loremflickr.com/640/480/food	21	Sushi	-45.8587	-112.724	25
23	warmth	Accusamus facere in voluptate. Nam autem sequi officiis in natus ab assumenda asperiores.	306	https://loremflickr.com/640/480/food	6	Soups	-71.4513	-42.6304	1
35	gavel	Quisquam nam magnam dolorem suscipit quis fugiat aliquam.	523	https://loremflickr.com/640/480/food	82	Sushi	-43.7092	3.7103	18
14	profit	Nihil quam illum sed. Quidem ab voluptas temporibus necessitatibus nemo soluta sapiente omnis perferendis. Impedit soluta porro fugiat impedit exercitationem repellendus fugit quae.	121	https://loremflickr.com/640/480/food	48	Drinks	45.6233	72.96	16
46	poker	Laudantium dolorem praesentium quidem voluptatem. Fugit doloribus cupiditate.	202	https://loremflickr.com/640/480/food	49	Orders	-57.1611	74.4382	1
12	deposition	Molestias quisquam pariatur ipsa ipsa beatae. Deleniti maiores tenetur numquam magni asperiores voluptas cum aut commodi. Officia nulla tempore velit similique ut culpa inventore.	762	https://loremflickr.com/640/480/food	48	Drinks	41.2738	-70.3857	20
28	bed	Quisquam quis dolores ratione corporis libero laboriosam. Quos distinctio repellendus unde aperiam eius ipsa. Dolor beatae necessitatibus sapiente impedit facilis ipsa cumque possimus cupiditate.	198	https://loremflickr.com/640/480/food	74	Soups	-49.1586	-112.6102	10
49	pet	Minima ipsam beatae quia quae minima. Debitis pariatur vel quidem placeat nesciunt esse quisquam unde. Laudantium voluptatem omnis vitae veniam ratione. At excepturi dignissimos dicta perferendis.	368	https://loremflickr.com/640/480/food	76	Orders	-7.6595	159.2899	6
11	flax	Nam excepturi quia. Veritatis non nam quisquam perferendis. Rem ex hic laborum officiis fuga. Maiores reiciendis quia consectetur est sed. Esse aliquid ipsam odit dolores odio.	152	https://loremflickr.com/640/480/food	25	Breakfast	0.5756	67.289	19
34	rocket	Dolore mollitia dolorem voluptatem ea saepe accusamus quibusdam accusantium maiores. Cum doloribus saepe. Quo quis dolore atque tempore facilis maxime sint. Eos ducimus explicabo.	560	https://loremflickr.com/640/480/food	64	Sushi	-78.2044	57.7287	24
31	upstairs	Optio distinctio voluptatem rerum iure eveniet quia dicta deserunt. Ullam veritatis fuga fugit veniam quod.	79	https://loremflickr.com/640/480/food	70	Sushi	-35.965	52.1526	0
1	hill	Modi facere assumenda ad deleniti hic at nesciunt corporis. Adipisci dolore autem nisi debitis iusto necessitatibus. Aspernatur ratione in voluptatem quasi laborum incidunt veniam. Culpa neque qui.	160	https://loremflickr.com/640/480/food	26	Breakfast	30.8335	9.7462	15
5	puddle	Ab minima exercitationem quos tenetur inventore.	486	https://loremflickr.com/640/480/food	30	Breakfast	-59.4348	70.0435	9
43	wholesale	Occaecati ut vitae ab fugiat reiciendis dolor delectus minima. Nisi blanditiis at. Laudantium porro similique praesentium. Reiciendis alias molestiae accusantium vero cum illum voluptates cumque nostrum.	367	https://loremflickr.com/640/480/food	37	Orders	32.1566	105.369	8
29	staircase	Amet in quisquam hic voluptas ut corrupti. Iste itaque deserunt quas ratione necessitatibus corporis dolorum quod. Officiis dolorem delectus accusamus voluptatum.	952	https://loremflickr.com/640/480/food	40	Soups	48.4789	160.2504	11
25	bonus	Quibusdam consectetur harum ab cumque voluptate soluta reiciendis.	442	https://loremflickr.com/640/480/food	74	Soups	-51.9537	-49.2168	3
39	keyboarding	Beatae laboriosam at esse provident officia nemo.	298	https://loremflickr.com/640/480/food	34	Sushi	10.6696	-93.7397	14
47	savory	Cum optio doloribus quibusdam in blanditiis eum possimus tempore.	465	https://loremflickr.com/640/480/food	58	Orders	-33.8922	-27.608	2
2	spectrograph	Quos optio quisquam fuga consequuntur porro illum ratione provident. Totam sunt voluptatem quos distinctio fuga assumenda omnis. Voluptatum cum quos officiis quisquam nobis voluptas sed odio. Deserunt magnam soluta deserunt id fuga. Reiciendis suscipit molestias deserunt ad possimus libero consectetur.	914	https://loremflickr.com/640/480/food	65	Breakfast	64.7631	-95.1653	18
37	expose	Qui eius dicta magnam vitae sequi.	348	https://loremflickr.com/640/480/food	10	Sushi	-82.5227	-99.9824	17
4	smog	Delectus maxime a minus itaque sint eveniet id omnis quod.	919	https://loremflickr.com/640/480/food	1	Breakfast	-75.2717	-123.2665	11
15	blame	Cupiditate qui aspernatur. Voluptate fugit optio illo debitis fugiat ipsam voluptatibus. Quidem voluptate doloremque. Quaerat magni quod accusantium mollitia reprehenderit. Magnam beatae at laudantium.	775	https://loremflickr.com/640/480/food	52	Drinks	61.3508	-178.3765	7
40	fame	Facere veritatis distinctio nisi.	54	https://loremflickr.com/640/480/food	15	Sushi	9.4692	-147.5925	6
44	gray	Ipsam et optio pariatur amet ipsa earum. Molestiae eligendi sit quis dolorem expedita. Excepturi incidunt odio reprehenderit.	16	https://loremflickr.com/640/480/food	43	Orders	1.4593	22.2643	0
50	ruling	Facere non dolor. Minus deserunt et quo dicta in incidunt cumque dolorem quod. Saepe quae aspernatur. Corrupti consectetur debitis numquam vel recusandae incidunt a perferendis.	497	https://loremflickr.com/640/480/food	6	Orders	58.4122	166.2578	7
30	crush	Numquam eaque eum. Qui debitis corrupti tenetur odio nulla inventore voluptas. Quo quam praesentium excepturi quidem sint delectus.	577	https://loremflickr.com/640/480/food	38	Soups	-73.6005	-157.6809	25
33	senior	Numquam reprehenderit facilis officia nihil facere nesciunt natus facere amet. Optio nam praesentium eligendi quasi accusamus.	409	https://loremflickr.com/640/480/food	58	Sushi	-68.5137	132.3521	19
42	codpiece	Labore autem assumenda dolor at tenetur rerum reiciendis. Nam libero neque nemo amet praesentium perferendis facilis commodi. Eligendi explicabo dolorem ullam ipsam tempore.	490	https://loremflickr.com/640/480/food	6	Orders	-35.6054	-158.5663	5
24	cherry	Odit ut expedita quisquam voluptate repellendus quibusdam eveniet autem. Pariatur sapiente laudantium adipisci. Veritatis illo corrupti adipisci quisquam dolorem aperiam aspernatur.	179	https://loremflickr.com/640/480/food	84	Soups	40.4762	-14.2522	2
41	pollutant	Ab possimus tempora consectetur temporibus impedit nam ipsum quas debitis. Omnis cumque incidunt perferendis quae doloribus nulla vitae reprehenderit. Rerum ex dolorem deserunt consectetur fugiat occaecati voluptatum nobis.	296	https://loremflickr.com/640/480/food	70	Orders	45.1646	63.3406	4
3	notation	Dolore eligendi et. Nesciunt aspernatur officia voluptas aperiam iste modi unde.	892	https://loremflickr.com/640/480/food	48	Breakfast	-22.5368	-24.6801	16
16	dawn	Dolores consectetur totam ipsam repellat est amet quo maiores itaque. Placeat eos sed quisquam perferendis vero recusandae consequuntur dignissimos. Accusamus at iste voluptatum distinctio ipsa. Laboriosam nam itaque libero quisquam. Iusto laudantium mollitia temporibus cupiditate natus cupiditate id qui distinctio.	352	https://loremflickr.com/640/480/food	7	Drinks	10.442	-10.2554	23
7	money	Architecto dolor enim. Culpa sunt facere voluptas ipsum fugit laboriosam eligendi. Optio doloremque libero minus maxime ullam maiores exercitationem. Veniam blanditiis vitae laboriosam quis unde incidunt distinctio eveniet. Corporis laboriosam ipsum optio ducimus quidem.	154	https://loremflickr.com/640/480/food	34	Breakfast	66.7072	-78.3205	12
20	rubric	Earum beatae similique dolorum architecto totam recusandae. Fuga eaque eos id fuga reiciendis nulla non corporis ex. Id mollitia minima consequatur. Quos cumque natus cum voluptatem commodi temporibus ex saepe eius. Facilis consequatur quos animi corporis iure tempora voluptates repellendus.	519	https://loremflickr.com/640/480/food	75	Drinks	36.6845	-146.8995	25
27	darkness	Repudiandae unde officiis aspernatur dolorem natus sapiente quasi. Odio ab voluptate nostrum. Architecto nulla eos voluptatum sed perferendis. Maxime aperiam inventore inventore eos nulla. Est corporis autem modi ea quisquam nemo nesciunt.	352	https://loremflickr.com/640/480/food	8	Soups	-56.245	-124.5983	4
21	foal	Id asperiores asperiores voluptatibus officia est quibusdam deserunt. Hic ratione consectetur ea voluptas inventore rerum sed. Quas sint amet saepe.	255	https://loremflickr.com/640/480/food	2	Soups	83.5376	135.3795	13
48	millet	Fugit odio odit placeat ad autem quibusdam alias. Dignissimos beatae vitae aut vel quas architecto tempore quibusdam. Molestias magnam cumque. Ipsum quasi ea rem inventore numquam amet veritatis. Exercitationem cumque mollitia voluptas repellendus.	703	https://loremflickr.com/640/480/food	76	Orders	-56.7629	28.7894	9
18	codepage	Vel iusto necessitatibus ipsum. Dicta iste expedita distinctio exercitationem amet. Occaecati sapiente deleniti exercitationem. Impedit labore amet ratione. Doloribus magni veritatis ipsam optio.	593	https://loremflickr.com/640/480/food	6	Drinks	-69.6643	21.2437	20
9	French Toast	Ipsum enim quae in ullam nisi laboriosam voluptas. Fugiat esse explicabo.	988	https://loremflickr.com/640/480/food	94	Breakfast	24.0748	-10.4626	13
8	parade	Vel ipsam tempore molestias iste excepturi magni. A natus necessitatibus.	982	https://loremflickr.com/640/480/food	60	Breakfast	75.5515	-168.0065	21
10	newsstand	Nisi nam soluta nobis eveniet explicabo ducimus at totam pariatur. Iure ab minus ipsum sit adipisci. Nostrum aut voluptatibus cumque dicta unde aliquid repudiandae natus error. Commodi consequuntur tempore commodi accusantium repudiandae.	712	https://loremflickr.com/640/480/food	90	Breakfast	45.2048	-72.4024	14
45	cover	Ratione atque voluptate error impedit mollitia. Veritatis dolore deleniti animi aliquam. Itaque inventore cumque et repellat cumque tenetur sint deleniti sequi. Animi architecto libero unde omnis libero. Nihil nulla in veniam deserunt et itaque repudiandae veniam iure.	387	https://loremflickr.com/640/480/food	21	Orders	-11.326	78.4455	3
26	ultimatum	Dolorum tenetur laudantium impedit vitae earum maiores expedita reprehenderit cum. Voluptatum ducimus animi perspiciatis quaerat. Dolore ipsum id magnam sunt quisquam nemo esse mollitia libero. Iusto quas amet enim saepe quos commodi doloribus magnam quod.	905	https://loremflickr.com/640/480/food	52	Soups	74.4268	36.7817	5
19	creative	Dicta illum facere aut nobis similique ipsam.	590	https://loremflickr.com/640/480/food	97	Drinks	17.1601	57.2357	15
17	mechanism	Omnis quia eligendi harum molestias nesciunt.	230	https://loremflickr.com/640/480/food	65	Drinks	89.5983	-142.8704	12
36	nougat	Quaerat quibusdam minima magni consectetur provident libero. Dolor accusamus assumenda officiis delectus. Eligendi eveniet quibusdam at. Placeat voluptatibus nesciunt perferendis ullam magni repellat minus dolor. Repudiandae repellendus incidunt molestias iure.	393	https://loremflickr.com/640/480/food	47	Sushi	-47.1976	-178.4445	21
\.


--
-- Data for Name: restaurant; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.restaurant (id, name, rating, rating_count, url, hours24, lat, lng) FROM stdin;
0	Cacti Cafe	4.2	2212	https://www.google.com/maps/place/Cacti+Cafe/data=!4m7!3m6!1s0x3e2efde0d2059f1d:0xfca400b51ca140cc!8m2!3d24.8339855!4d46.7356133!16s%2Fg%2F11mwzvn0zx!19sChIJHZ8F0uD9Lj4RzEChHLUApPw?authuser=0&hl=en&rclk=1	t	24.8339855	46.7356133
1	فازا قهوة مختصة	4.3	889	https://www.google.com/maps/place/%D9%81%D8%A7%D8%B2%D8%A7+%D9%82%D9%87%D9%88%D8%A9+%D9%85%D8%AE%D8%AA%D8%B5%D8%A9%E2%80%AD/data=!4m7!3m6!1s0x3e2efdc6c840b3ed:0x792ad260e10b7e!8m2!3d24.7724577!4d46.6973369!16s%2Fg%2F11mwkdclc9!19sChIJ7bNAyMb9Lj4RfgvhYNIqeQA?authuser=0&hl=en&rclk=1	f	24.7724577	46.6973369
2	ناريز	3.8	39	https://www.google.com/maps/place/%D9%86%D8%A7%D8%B1%D9%8A%D8%B2%E2%80%AD/data=!4m7!3m6!1s0x3e2faacd291e6591:0x3e908558d2f0f63f!8m2!3d24.8072766!4d46.8521092!16s%2Fg%2F11c5_5k_zz!19sChIJkWUeKc2qLz4RP_bw0liFkD4?authuser=0&hl=en&rclk=1	f	24.8072766	46.8521092
3	Fc Lounge - اف سي لاونج	3.5	539	https://www.google.com/maps/place/Fc+Lounge+-+%D8%A7%D9%81+%D8%B3%D9%8A+%D9%84%D8%A7%D9%88%D9%86%D8%AC%E2%80%AD/data=!4m7!3m6!1s0x3e2eff79d7dd770d:0xbd5029a7e12e0c2b!8m2!3d24.8131149!4d46.7680585!16s%2Fg%2F11lgkw1ffk!19sChIJDXfd13n_Lj4RKwwu4acpUL0?authuser=0&hl=en&rclk=1	t	24.8131149	46.7680585
4	PEAKS	4.6	25	https://www.google.com/maps/place/PEAKS/data=!4m7!3m6!1s0x3e2ee380585f0151:0xab784cd32a1e3d85!8m2!3d24.742045!4d46.6348092!16s%2Fg%2F11s0qh89n0!19sChIJUQFfWIDjLj4RhT0eKtNMeKs?authuser=0&hl=en&rclk=1	f	24.742045	46.6348092
5	Joffrey's جوفريز	2.9	34	https://www.google.com/maps/place/Joffrey%27s+%D8%AC%D9%88%D9%81%D8%B1%D9%8A%D8%B2%E2%80%AD/data=!4m7!3m6!1s0x3e2f1d97addc7711:0xc93e4546dea3a486!8m2!3d24.7146875!4d46.6349375!16s%2Fg%2F11p00bzdsv!19sChIJEXfcrZcdLz4RhqSj3kZFPsk?authuser=0&hl=en&rclk=1	f	24.7146875	46.6349375
6	Just A Space	3.7	642	https://www.google.com/maps/place/Just+A+Space/data=!4m7!3m6!1s0x3e2ee37ebbba0adb:0x6244de085a0cf625!8m2!3d24.7537907!4d46.6391066!16s%2Fg%2F11k453rlpd!19sChIJ2wq6u37jLj4RJfYMWgjeRGI?authuser=0&hl=en&rclk=1	f	24.7537907	46.6391066
7	Arabica cafe	3.9	19	https://www.google.com/maps/place/Arabica+cafe/data=!4m7!3m6!1s0x3e2f010780272ff5:0xb6f597526c208e6f!8m2!3d24.7712633!4d46.8047485!16s%2Fg%2F11j_1m6cyh!19sChIJ9S8ngAcBLz4Rb44gbFKX9bY?authuser=0&hl=en&rclk=1	t	24.7712633	46.8047485
8	ستار بوكس	4	114	https://www.google.com/maps/place/%D8%B3%D8%AA%D8%A7%D8%B1+%D8%A8%D9%88%D9%83%D8%B3%E2%80%AD/data=!4m7!3m6!1s0x3e2f01b2b28fe6bf:0x76eea34763718782!8m2!3d24.7241864!4d46.7757565!16s%2Fg%2F11hdlpbbjj!19sChIJv-aPsrIBLz4RgodxY0ej7nY?authuser=0&hl=en&rclk=1	f	24.7241864	46.7757565
9	10AM CAFE	4.9	25	https://www.google.com/maps/place/10AM+CAFE/data=!4m7!3m6!1s0x3e2f1dd0b5250ffb:0x58974df29c6dee19!8m2!3d24.7010111!4d46.6470984!16s%2Fg%2F11rzpybx2f!19sChIJ-w8ltdAdLz4RGe5tnPJNl1g?authuser=0&hl=en&rclk=1	f	24.7010111	46.6470984
10	كيان كافيه	4	494	https://www.google.com/maps/place/%D9%83%D9%8A%D8%A7%D9%86+%D9%83%D8%A7%D9%81%D9%8A%D9%87%E2%80%AD/data=!4m7!3m6!1s0x3e2f1bdee5cc8bb9:0x6d0ac8ac0c8713ce!8m2!3d24.5736094!4d46.6238151!16s%2Fg%2F11rhp2nhl5!19sChIJuYvM5d4bLz4RzhOHDKzICm0?authuser=0&hl=en&rclk=1	t	24.5736094	46.6238151
11	McCafe	4.1	92	https://www.google.com/maps/place/McCafe/data=!4m7!3m6!1s0x3e2f052d56ff26cf:0x498cefb25c5fe84b!8m2!3d24.6703427!4d46.7276564!16s%2Fg%2F11s5txcrtd!19sChIJzyb_Vi0FLz4RS-hfXLLvjEk?authuser=0&hl=en&rclk=1	f	24.6703427	46.7276564
12	عنوان القهوة	4.1	53	https://www.google.com/maps/place/%D8%B9%D9%86%D9%88%D8%A7%D9%86+%D8%A7%D9%84%D9%82%D9%87%D9%88%D8%A9%E2%80%AD/data=!4m7!3m6!1s0x3e2fa9e93490fabb:0x2c8314bd3011f26b!8m2!3d24.7125499!4d46.836938!16s%2Fg%2F11tbz48c6l!19sChIJu_qQNOmpLz4Ra_IRML0Ugyw?authuser=0&hl=en&rclk=1	f	24.7125499	46.836938
13	Barista Tools	4	455	https://www.google.com/maps/place/Barista+Tools/data=!4m7!3m6!1s0x3e2efdf26d4c8095:0x2be11916201e39a8!8m2!3d24.7774284!4d46.6878705!16s%2Fg%2F11nxg0fjgl!19sChIJlYBMbfL9Lj4RqDkeIBYZ4Ss?authuser=0&hl=en&rclk=1	f	24.7774284	46.6878705
14	barn’s cafe	4.2	76	https://www.google.com/maps/place/barn%E2%80%99s+cafe/data=!4m7!3m6!1s0x3e2f1138e20ff0e7:0xa5b4c9e5a7006df3!8m2!3d24.5525426!4d46.6258991!16s%2Fg%2F11rzr217l2!19sChIJ5_AP4jgRLz4R820Ap-XJtKU?authuser=0&hl=en&rclk=1	f	24.5525426	46.6258991
15	blue beans bakery & cafe بلو بينز	4.6	148	https://www.google.com/maps/place/blue+beans+bakery+%26+cafe+%D8%A8%D9%84%D9%88+%D8%A8%D9%8A%D9%86%D8%B2%E2%80%AD/data=!4m7!3m6!1s0x3e2efd49228a65bf:0x6849077cde9ae057!8m2!3d24.7859556!4d46.6579725!16s%2Fg%2F11rb33r211!19sChIJv2WKIkn9Lj4RV-Ca3nwHSWg?authuser=0&hl=en&rclk=1	f	24.7859556	46.6579725
16	وزنة ورق لتقديم الشاي	5	37	https://www.google.com/maps/place/%D9%88%D8%B2%D9%86%D8%A9+%D9%88%D8%B1%D9%82+%D9%84%D8%AA%D9%82%D8%AF%D9%8A%D9%85+%D8%A7%D9%84%D8%B4%D8%A7%D9%8A%E2%80%AD/data=!4m7!3m6!1s0x3e2f077301f68b1b:0xd36b0619cf397f44!8m2!3d24.6766428!4d46.8016956!16s%2Fg%2F11sf2_yq0z!19sChIJG4v2AXMHLz4RRH85zxkGa9M?authuser=0&hl=en&rclk=1	f	24.6766428	46.8016956
17	Aromaz coffee	4.4	15	https://www.google.com/maps/place/Aromaz+coffee/data=!4m7!3m6!1s0x3e2efdea97eabc2d:0xac3d0bd678ed4351!8m2!3d24.8186445!4d46.6869512!16s%2Fg%2F11fmh7tz10!19sChIJLbzql-r9Lj4RUUPteNYLPaw?authuser=0&hl=en&rclk=1	f	24.8186445	46.6869512
18	Dunkin Donuts	4.2	471	https://www.google.com/maps/place/Dunkin+Donuts/data=!4m7!3m6!1s0x3e2ee179d12e29dd:0xdfd9514c47de3fa7!8m2!3d24.7677145!4d46.5773147!16s%2Fg%2F11fmrqqwf9!19sChIJ3Sku0XnhLj4Rpz_eR0xR2d8?authuser=0&hl=en&rclk=1	f	24.7677145	46.5773147
19	ضحى لاونج DUHA LOUNGE	4.2	245	https://www.google.com/maps/place/%D8%B6%D8%AD%D9%89+%D9%84%D8%A7%D9%88%D9%86%D8%AC+DUHA+LOUNGE%E2%80%AD/data=!4m7!3m6!1s0x3e2efd2f75e5dead:0xfa01899011853425!8m2!3d24.8027909!4d46.6947933!16s%2Fg%2F11pppy7kzz!19sChIJrd7ldS_9Lj4RJTSFEZCJAfo?authuser=0&hl=en&rclk=1	f	24.8027909	46.6947933
20	كرك عزام	4.4	36	https://www.google.com/maps/place/%D9%83%D8%B1%D9%83+%D8%B9%D8%B2%D8%A7%D9%85%E2%80%AD/data=!4m7!3m6!1s0x3e2f195103d56039:0xb650ca162fe723ec!8m2!3d24.5869754!4d46.543266!16s%2Fg%2F11pz00j90d!19sChIJOWDVA1EZLz4R7CPnLxbKULY?authuser=0&hl=en&rclk=1	f	24.5869754	46.543266
21	Pretzel Maker	4.5	10	https://www.google.com/maps/place/Pretzel+Maker+%D8%A8%D9%8A%D8%B1%D8%AA%D8%B2%D9%84+%D9%85%D9%8A%D9%83%D8%B1%E2%80%AD/data=!4m7!3m6!1s0x3e2f058fe643bd91:0xdf52bd8a77ae5c74!8m2!3d24.6786722!4d46.7246902!16s%2Fg%2F11h__100dn!19sChIJkb1D5o8FLz4RdFyud4q9Ut8?authuser=0&hl=en&rclk=1	f	24.6786722	46.7246902
22	WAST ALQAHRA Coffee shop	4.6	30	https://www.google.com/maps/place/WAST+ALQAHRA+Coffee+shop+-+%D9%83%D8%A7%D9%81%D9%8A%D9%87+%D9%88%D8%B3%D8%B7+%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9%E2%80%AD/data=!4m7!3m6!1s0x3e2f091e6083fd41:0xb5893b1c6c20a0d0!8m2!3d24.5916426!4d46.7587146!16s%2Fg%2F11tp3v5qh_!19sChIJQf2DYB4JLz4R0KAgbBw7ibU?authuser=0&hl=en&rclk=1	f	24.5916426	46.7587146
23	Caffa coffee	3.9	67	https://www.google.com/maps/place/Caffa+coffee/data=!4m7!3m6!1s0x3e2f06c337657069:0xfd52f10246125a6f!8m2!3d24.6886218!4d46.7763036!16s%2Fg%2F11ckrcn5ts!19sChIJaXBlN8MGLz4Rb1oSRgLxUv0?authuser=0&hl=en&rclk=1	f	24.6886218	46.7763036
24	Coffee House	3.6	149	https://www.google.com/maps/place/Coffee+House/data=!4m7!3m6!1s0x3e2f1a6497aded19:0x7bfc798e666475c2!8m2!3d24.5853449!4d46.6263145!16s%2Fg%2F12q4ynw5l!19sChIJGe2tl2QaLz4RwnVkZo55_Hs?authuser=0&hl=en&rclk=1	f	24.5853449	46.6263145
25	starbucks	4	51	https://www.google.com/maps/place/starbucks/data=!4m7!3m6!1s0x3e2f0f15d1b5417f:0x8ec869cdeb873717!8m2!3d24.5606151!4d46.6770931!16s%2Fg%2F11rxp8v1rb!19sChIJf0G10RUPLz4RFzeH681pyI4?authuser=0&hl=en&rclk=1	f	24.5606151	46.6770931
\.


--
-- Name: menu menu_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menu
    ADD CONSTRAINT menu_pkey PRIMARY KEY (id);


--
-- Name: restaurant restaurant_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurant
    ADD CONSTRAINT restaurant_pkey PRIMARY KEY (id);


--
-- Name: menu fkblwdtxevpl4mrds8a12q0ohu6; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menu
    ADD CONSTRAINT fkblwdtxevpl4mrds8a12q0ohu6 FOREIGN KEY (restaurant_id) REFERENCES public.restaurant(id);


--
-- PostgreSQL database dump complete
--

