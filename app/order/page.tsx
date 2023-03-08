import React, { useMemo } from 'react'

import { CONSTANTS } from '../../commons/constants'
import RouteList from '../../components/OrderPage/RouteList'
import BasePagination from '../../components/UI/BasePagination'

export default function Home() {
    const pageCount = useMemo(() => {
        return Math.floor(CONSTANTS.ROUTES.length / 5)
    }, [CONSTANTS.ROUTES])

    const currentList = useMemo(() => {
        return CONSTANTS.ROUTES.slice(0, 5)
    }, [pageCount])
    return (
        <>
            <RouteList items={currentList} />
            <BasePagination pagesCount={pageCount} className="my-[150px]" />
        </>
    )
}
