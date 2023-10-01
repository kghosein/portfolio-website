import { useState } from "react"
import data from "../data/data.json"
import Arrow from "./svgs/Arrow"
import { AnimatePresence, motion } from "framer-motion"

const variants = {
	"hidden": {
		opacity: 0,
		width: 0,
		height: 0,
		overflow: "hidden"
	},
	"visible": {
		opacity: 1,
		width: "auto",
		height: "auto",
		overflow: "unset",
	}
}

const AccordionMode = () => {
	const [show, setShow] = useState(() => null)

	const handleToggle = (i) => {
		setShow(show === i ? null : i)
	}

	return (
		data?.resume?.accordionMode.map((el, i) => (
			<div
				className="accordion-mode__el"
				key={i}
				data-is-content={show === i ? true : false}
			>
				<div
					className="accordion-mode__el__header"
					onClick={() => handleToggle(i)}
					data-is-content={show === i ? true : false}
				>
					<h3 dangerouslySetInnerHTML={{ __html: el?.header }} />
					<button
						className="accordion-mode__el__header__cta"
					>
						<Arrow />
					</button>
				</div>
				<AnimatePresence>
					{show === i && (
						<motion.div
							initial={"hidden"}
							animate={"visible"}
							exit={"hidden"}
							variants={variants}
						>
							<div
								className="accordion-mode__el__content"
							>
								<p>{el?.content}</p>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		))
	)
}

export default AccordionMode