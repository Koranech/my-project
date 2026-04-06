import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({pg: '1'});
    let currentPage = Number(query.get('pg') || '1')

    return (
        <div>
            <button onClick={() => {
                if (currentPage > 1) {
                    setQuery({pg: (--currentPage).toString()})
                }
            }}>prev
            </button>

            <button onClick={() => {
                if (currentPage < 21) {
                    setQuery({pg: (++currentPage).toString()})
                }
            }}>next
            </button>
        </div>
    );
};

export default PaginationComponent;
