'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FacebookIcon, FrameIcon, InstagramIcon, LinkedinIcon, YoutubeIcon, Twitter, Github, Linkedin, Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ui/theme-toggle';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Product',
		links: [
			{ title: 'How It Works', href: '/how-it-works' },
			{ title: 'For Organizers', href: '/for-organizers' },
			{ title: 'For Fans', href: '/for-fans' },
			{ title: 'Pricing', href: '/pricing' },
			{ title: 'Collectibles', href: '/collectibles' },
		],
	},
	{
		label: 'Company',
		links: [
			{ title: 'Investors', href: '/investors' },
			{ title: 'Blog', href: '/blog' },
			{ title: 'FAQ', href: '/faq' },
			{ title: 'Contact', href: '/contact' },
			{ title: 'Careers', href: '/careers' },
		],
	},
	{
		label: 'Support',
		links: [
			{ title: 'Documentation', href: '/documentation' },
			{ title: 'API Reference', href: '/apireference' },
			{ title: 'Security', href: '/security' },
			{ title: 'Privacy Policy', href: '/privacypolicy' },
			{ title: 'Terms of Service', href: '/termsofservice' },
		],
	},
	{
		label: 'Social Links',
		links: [
			{ title: 'Twitter', href: '#', icon: Twitter },
			{ title: 'GitHub', href: '#', icon: Github },
			{ title: 'LinkedIn', href: '#', icon: Linkedin },
		],
	},
];

export function Footer() {
	return (
		<footer className="rounded-t-xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center bg-secondary border-t border-primary px-6 py-12 lg:py-16">
			<div className="bg-border/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

			<div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
				<AnimatedContainer className="space-y-4">
					<Link to="/" className="flex items-center space-x-3 mb-6 group">
						<div className="p-2 bg-accent rounded-xl group-hover:bg-accent-hover transition-all duration-300 group-hover:scale-105">
							<Ticket className="h-5 w-5 text-white" />
						</div>
						<span className="text-heading-3 text-primary">OpenTicket</span>
						<ThemeToggle />
					</Link>
					<p className="text-body text-secondary mb-6 leading-relaxed">
						Ticketing. Owned, fair, and fraud-proof. Built on Solana for transparent, scalable event experiences.
					</p>
					<p className="text-secondary text-body-sm md:mt-0">
						© {new Date().getFullYear()} OpenTicket. All rights reserved.
					</p>
				</AnimatedContainer>

				<div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
					{footerLinks.map((section, index) => (
						<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
							<div className="mb-10 md:mb-0">
								<h3 className="text-caption text-primary font-semibold mb-4">{section.label}</h3>
								<ul className="text-secondary space-y-2 text-body-sm">
									{section.links.map((link) => (
										<li key={link.title}>
											<a
												href={link.href}
												className="hover:text-accent inline-flex items-center transition-all duration-300"
											>
												{link.icon && <link.icon className="me-1 size-4" />}
												{link.title}
											</a>
										</li>
									))}
								</ul>
							</div>
						</AnimatedContainer>
					))}
				</div>
			</div>
		</footer>
	);
};

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return children;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
};