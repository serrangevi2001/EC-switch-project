import moment from "moment";
// eslint-disable-next-line
export const getToken = () => {
  const accessToken = localStorage.getItem('access_token');
  console.log("accessToken:", accessToken)
  const expiresInSec = localStorage.getItem('expires_in');
  console.log("expiresInSec:", expiresInSec)
  return new Promise((resolve) => {
    const diff = moment.unix(Number(expiresInSec)).diff(moment(), 'minutes');
    console.log(moment.unix(Number(expiresInSec)))
    console.log("diff", diff)
    if (accessToken && diff > 5) {
      console.log("accessToken", accessToken)
      console.log("accessToken && diff >5:", accessToken && diff > 5)
      resolve(accessToken);
    } else {
      console.log('getToken ', diff);
      // eslint-disable-next-line no-unused-expressions
      console.log("accessToken:", accessToken)
      resolve(accessToken);
    }
  });
};

export const getPage=(totalItems,currentPage,pageSize)=>{
  console.log('totalitems',totalItems)
  console.log('currentpage',currentPage)
  console.log('pagesize',pageSize)
  
currentPage = currentPage || 1;       // currentpage = 1 || 1 --> or operator
  console.log("currentPage:", currentPage)
  pageSize = pageSize || 10;           // pageSize = 6 || 10
  console.log("pageSize", pageSize)
  const totalPages = Math.ceil(totalItems / pageSize);    // math.ceil(33/6) = 5.5
  console.log("totalpages:", totalPages)   // totalPages : 6
  let startPage;
  let endPage;
  if (totalPages <= 10) {    // this format are default don't change any thing except currentPage name.
    startPage = 1;
    endPage = totalPages;
    console.log("endPage", endPage)
  }
  else {
    // eslint-disable-next-line
    if (currentPage <= 6) {   // eslint-disable-next-line
      startPage = 1;
      endPage = 10;
    }
    else if (currentPage + 4 >= totalPages) {
      startPage = totalPages - 9;
      endPage = totalPages;
      console.log("startPage:", startPage);
      console.log("endPage:", endPage);
    }
    else {
      startPage = currentPage - 5;
      endPage = currentPage + 4
      console.log("startPage:", startPage)
      console.log("endPage:", endPage)
    }
  }
  const startIndex = (currentPage - 1) * pageSize;    // startIndex=(1-1)*6  => 0*6 => 0
  console.log("startIndex", startIndex);         // startIndex= 0
  const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1)  // math.min (0+6-1, 33-1)  => (5,32)
  console.log(endIndex)   // endIndex = 5
  const pages = [...Array(endPage + 1 - startPage).keys()].map((i) => startPage + i);
  console.log("pages:", pages) // [1, 2, 3, 4, 5, 6]  this are set in index value.
  return {
    totalItems,  // 33
    currentPage,  // 1
    pageSize,     // 6
    totalPages,   // 6
    startPage,    // 1
    endPage,      // 6
    startIndex,   // 0
    endIndex,     // 5
    pages         // [1, 2, 3, 4, 5, 6]
  }

}




