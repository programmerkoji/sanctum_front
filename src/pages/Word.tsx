import React, { FC, useEffect } from 'react'
import { Nav } from '../organisms/Nav'
import { Header } from '../organisms/Header'
import { useWords } from '../hooks/useWords'

export const Word: FC = () => {
  const {fetchPost, wordsData } = useWords();

  useEffect(() => {
    fetchPost();
  }, [])

  return (
    <div className="App">
    <div className="min-h-screen bg-gray-100">
      <Nav />
      <Header />
      <main>
        {/* <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          message={message}
          key={vertical + horizontal}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar> */}
        <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
              <div className="p-6 bg-white border-b border-gray-200">
                <div className="text-gray-600 body-font">
                  <div className="mb-4"></div>
                  <div className="mb-6 flex items-center flex-wrap gap-4">
                    {/* <Create
                      formData={formData}
                      handleCreateSubmit={handleCreateSubmit}
                      handleInputChange={handleInputChange}
                    />
                    <Search
                      selectData={selectData}
                      handleSelectChange={handleSelectChange}
                      handleSearchSubmit={handleSearchSubmit}
                    /> */}
                  </div>

                  <div className="container mx-auto">
                    <ul className="flex flex-wrap -m-2">
                        {wordsData.map((word) => (
                          <li key={word.id}>
                            <div>{word.word_en}</div>
                            <div>{word.word_ja}</div>
                          </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* <div className="mt-4 flex justify-center">
                  <Pagination
                    count={wordsData.last_page}
                    page={page}
                    onChange={handleChangePage}
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  )
}
