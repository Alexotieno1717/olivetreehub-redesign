import { Meta } from "../../../types";


interface IPaginationProps {
	currentPage: number;
	meta: Meta | undefined;
	onPageChange: (pageNumber: number) => void;
	handlePreviousPage: () => void;
	handleNextPage: () => void;
	textColor: string;
}
const Pagination = ({
	currentPage,
	meta,
	onPageChange,
	handlePreviousPage,
	handleNextPage,
}: IPaginationProps) => {
	const renderPageNumbers = () => {
		const pageNumbers = [];
		if (meta) {
			for (let count = 1; count <= meta?.pagination.pageCount; count++) {
				pageNumbers.push(
					<button
						key={count}
						onClick={() => onPageChange(count)}
						className={`${count === currentPage ? 'bg-black': 'bg-yellow' } text-white  w-10 h-10 rounded-full`}
					>
						{count}
					</button>
				);
			}
		}
		return pageNumbers;
	};

	return (
		<div className={`${meta?.pagination.total === 0 ? 'hidden' : 'flex '} justify-center gap-x-2`}>
			<button
				onClick={handlePreviousPage}
				disabled={currentPage === 1}
				className={`${
					currentPage === 1 ? "opacity-50" : "opacity-100"
				} hover:underline`}
			>
				Previous
			</button>
			{renderPageNumbers()}
			<button
				onClick={handleNextPage}
				disabled={currentPage === meta?.pagination.pageCount}
				className={`${
					currentPage === meta?.pagination.pageCount
						? "opacity-50"
						: "opacity-100"
				}  hover:underline`}
			>
				Next
			</button>
		</div>
	);
};

export default Pagination;
