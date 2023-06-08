import schema from "../assets/images/schema.png"
import mckinsey from "../assets/images/mckinsey.png"
import sedus from "../assets/images/sedus.png"
import pefa from "../assets/images/pefa.png"
import aspi from "../assets/images/aspi.png"
import bloomberg from "../assets/images/bloomberg.png"

export const data = [
	{
		title: "Schema Design Website",
		tools: ["devicon-vuejs-plain-wordmark"],
		image: schema,
		notes:
			"This was a complete redesign of the site, and a move from Webflow to a custom Vue3 build. I built all the components from scratch, with no UI libraries for easy maintenance and complete customization. It is a dynamic site so any content entered in the custom backend is instanteously rendered.",
		link: "https://www.schemadesign.com",
	},
	{
		title: "McKinsey Leap Executive Guide",
		tools: ["devicon-vuejs-plain-wordmark"],
		image: mckinsey,
		notes: "",
		link: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-executives-guide-to-new-business-building",
	},
	{
		title: "Sedus Workscape of Tomorrow",
		tools: ["devicon-nuxtjs-plain-wordmark"],
		image: sedus,
		notes: "",
		link: "https://www.workscapeoftomorrow.com",
	},
	{
		title: "PEFA Global Report 2022",
		tools: ["devicon-react-original-wordmark", "devicon-gatsby-plain-wordmark"],
		image: pefa,
		notes: "",
		link: "https://www.pefa.org/global-report-2022/en/",
	},
	{
		title: "Asia Society Blackbox of Chinese Politics",
		tools: [
			"devicon-svelte-plain-wordmark",
			"devicon-d3js-plain",
			"devicon-drupal-plain-wordmark",
		],
		image: aspi,
		notes: "",
		link: "https://asiasociety.org/policy-institute/decoding-chinas-20th-party-congress",
	},
	{
		title: "Bloomberg NEF 2022",
		tools: ["devicon-threejs-original", "devicon-d3js-plain"],
		image: bloomberg,
		notes: "",
		link: "",
	},
]
