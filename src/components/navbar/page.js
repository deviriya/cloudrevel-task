import React from 'react'

function Page() {
    return (
        <nav className="fixed top-0 z-50 w-full bg-black py-2">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        <a href="#" className="flex ms-2 md:me-24">
                            <img src='https://www.cloudrevels.com/wp-content/uploads/2022/07/Logo-6.png' width={150} />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Page