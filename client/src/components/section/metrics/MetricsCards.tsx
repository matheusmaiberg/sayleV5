import { useTranslation } from "@/hooks/useTranslation";

export function MetricsCards() {
	const { t } = useTranslation();

	const metrics = [
		{ value: "3x", description: t("hero.metrics.qualified_leads") },
		{ value: "75%", description: t("hero.metrics.conversations_resolved") },
		{
			value: "<5 seg",
			description: t("hero.metrics.response_time"),
		},
	];

	return (
		<section className=" bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
					{metrics.map((metric, index) => (
						<div
							key={index}
							className="bg-gray-50 rounded-2xl p-8 text-left transition-all duration-300 hover:shadow-lg hover:bg-gray-100"
						>
							<div className="text-5xl lg:text-5xl font-bold mb-4 p-1 bg-brand-gradient bg-clip-text text-transparent">
								{metric.value}
							</div>
							<div className="text-gray-700 text-md leading-relaxed">
								{metric.description}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
