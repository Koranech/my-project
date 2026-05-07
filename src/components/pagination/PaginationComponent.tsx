import {useSearchParams} from "react-router-dom";
import {service} from "../../services/api.service.ts";
import {useEffect, useState} from "react";
import type {IUserResponseModel} from "../../models/IUserResponseModel.ts";

const PaginationComponent = () => {

    const [query, setQuery] = useSearchParams({page: '1', limit: '9'})
    const page: string = query.get('page') || '1'
    let currentPage: number = Number(page)

    const limit: string = query.get('limit') || '9'
    const currentLimit: number = Number(limit)

    const [total, setTotal] = useState(1)
    const countPages: number = Math.ceil(total / currentLimit)

    useEffect(() => {
        service.getAllUsers(currentPage.toString(), currentLimit)
            .then(({total}: IUserResponseModel) => setTotal(total))
    }, [currentPage, currentLimit]);

    return (
        <div>
            <button onClick={() => {
                if (page) {
                    setQuery({page: (--currentPage).toString(), limit: (currentLimit.toString())})
                    if (currentPage < 1) {
                        setQuery({page: '1', limit: (currentLimit.toString())})
                    }
                }
            }}>prev
            </button>

            <button onClick={() => {
                if (page) {
                    if (currentPage < countPages) {
                        setQuery({page: (++currentPage).toString(), limit: (currentLimit.toString())})
                    }
                }
            }}>next
            </button>

            <button onClick={() => {
                if (currentLimit > 3) {
                    setQuery({page: '1', limit: (currentLimit - 3).toString()})
                }
            }}>Limit - 3
            </button>

            <button onClick={() => {
                if (currentLimit + 3 < total) {
                    setQuery({page: '1', limit: (currentLimit + 3).toString()})
                } else {
                    setQuery({page: '1', limit: (total).toString()})
                }

            }}>Limit + 3
            </button>

        </div>
    );
};

export default PaginationComponent;
