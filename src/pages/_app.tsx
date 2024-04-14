import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "@/global.css";

const inter = Inter({ subsets: ["latin"] });

export default function MyApp({
	Component,
	pageProps
}) {
	return (
		<div className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
			<Providers>
				<Header />
				<Component {...pageProps} />
				<Footer />
				<ScrollToTop />
			</Providers>
		</div>
	);
}

import Providers from "./providers";
