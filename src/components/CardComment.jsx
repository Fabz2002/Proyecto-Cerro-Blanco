function CardComment({ name = '', comment = '' }) {
	return (
		<div className=" flex flex-col  items-center justify-center text-center  rounded-md  py-6 px-8 bg-transparent ">
			<div className="relative w-20 h-20 mb-4">
				<div className="absolute inset-0 flex items-center justify-center text-8xl text-gray-400">
					&ldquo;
				</div>
			</div>
			<h2 className="text-lg font-medium mb-2">{name}</h2>
			<p className="text-gray-500">{comment}</p>
		</div>
	)
}

export default CardComment
