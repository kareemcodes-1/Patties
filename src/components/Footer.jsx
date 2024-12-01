import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#ff5227] p-[1rem] lg:px-[3rem] px-[1rem] w-full mt-[2rem]'>
         <div className='flex lg:flex-row flex-col lg:gap-0 gap-[2rem] lg:items-center items-start justify-between pt-[2rem] pb-[4rem]'>
            <div className='lg:grid flex flex-col grid-cols-2 gap-[2rem]'>
                  <ul className='text-white flex flex-col gap-[1rem]'>
                      <li className='w-[200px]'>123 Maple Street,
                       Springfield, IL 62704</li>
                       <li>(555) 123-4567</li>
                  </ul>


                  <ul className='text-white w-[260px]'>
                      <li>Monday - Friday:
                      12:00 PM - 10:00 PM</li>

                      <li>Saturday - Sunday:
                        10:00 AM - 6:00 PM</li>
                  </ul>
            </div>

            <div className='grid grid-cols-2 gap-[4rem]'>
                <ul className='text-white flex flex-col gap-[.5rem]'>
                    <li><a href="/shop">Shop all</a></li>
                    <li><a href="">FAQs</a></li>
                </ul>

                <ul className='text-white flex flex-col gap-[.5rem]'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/shop">Shop All</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
         </div>

         <svg
    xmlns="http://www.w3.org/2000/svg"
    className='lg:block hidden'
    width="1178.795"
    height="276.274"
    viewBox="0 0 1178.795 276.274"
  >
    <path
      id="svgGroup"
      fill="#fff"
      fillRule="evenodd"
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth="0.945"
      d="M535.423 202.922v-20.14c0-14.06-11.4-25.84-25.46-25.84-14.44 0-25.84 11.78-25.84 25.84v22.04a46 46 0 0 1-.775 8.926c-1.635 8.213-5.929 13.099-13.558 14.755a31 31 0 0 1-6.567.639 28 28 0 0 1-7.936-1.009c-8.638-2.566-12.204-10.085-12.204-23.311v-85.5h66.12c12.92 0 23.56-10.64 23.56-23.56s-10.64-23.56-23.56-23.56h-66.12v-17.86c0-15.2-12.16-27.74-27.36-27.74-15.58 0-27.74 12.54-27.74 27.74v147.44a93.2 93.2 0 0 0 4.869 31.127c10.005 28.296 34.951 43.353 70.371 43.353a92.7 92.7 0 0 0 30.419-4.632c27.094-9.398 41.781-32.897 41.781-68.708Zm182.02 0v-20.14c0-14.06-11.4-25.84-25.46-25.84-14.44 0-25.84 11.78-25.84 25.84v22.04a46 46 0 0 1-.775 8.926c-1.635 8.213-5.929 13.099-13.558 14.755a31 31 0 0 1-6.567.639 28 28 0 0 1-7.936-1.009c-8.638-2.566-12.204-10.085-12.204-23.311v-85.5h66.12c12.92 0 23.56-10.64 23.56-23.56s-10.64-23.56-23.56-23.56h-66.12v-17.86c0-15.2-12.16-27.74-27.36-27.74-15.58 0-27.74 12.54-27.74 27.74v147.44a93.2 93.2 0 0 0 4.869 31.127c10.005 28.296 34.951 43.353 70.371 43.353a92.7 92.7 0 0 0 30.419-4.632c27.094-9.398 41.781-32.897 41.781-68.708Zm385.7 73.34a112.3 112.3 0 0 0 27.446-3.134c10.169-2.562 18.613-6.599 25.44-11.744a58.38 58.38 0 0 0 22.734-48.202 60.1 60.1 0 0 0-2.966-19.375c-9.526-28.183-40.095-36.736-63.534-43.705a569 569 0 0 1-4.239-1.395c-12.395-4.144-22.124-8.168-24.476-15.276a11 11 0 0 1-.545-3.469 13.715 13.715 0 0 1 8.523-12.942c3.167-1.473 7.104-2.258 11.617-2.258a42.4 42.4 0 0 1 6.862.513c2.72.446 5.136 1.191 7.292 2.254a20.6 20.6 0 0 1 4.846 3.313 22.2 22.2 0 0 1 3.562 3.99c1.093 1.52 2.138 3.23 3.278 5.13a26.83 26.83 0 0 0 23.073 14.436 28 28 0 0 0 .487.004c13.53 0 23.391-8.341 24.579-20.958a28 28 0 0 0 .121-2.602c0-8.354-2.656-17.846-11.002-26.581l-.018-.019c-10.875-11.478-26.792-19.835-47.37-22.78a119 119 0 0 0-16.85-1.16 96.8 96.8 0 0 0-28.835 4.091c-11.406 3.552-20.691 9.245-27.773 16.392a58.13 58.13 0 0 0-16.732 41.457 58.5 58.5 0 0 0 3.029 19.321c7.269 20.959 26.529 30.909 45.79 37.768a353 353 0 0 0 12.361 4.091l.068.023c18.591 6.068 34.512 10.632 34.512 22.777 0 8.268-4.524 13.609-14.908 15.132a47 47 0 0 1-6.752.448 53 53 0 0 1-6.088-.318c-6.021-.698-10.181-2.561-13.672-5.762-2.534-2.216-4.539-5.225-6.677-8.805a254 254 0 0 1-1.303-2.215c-4.94-9.12-12.16-15.2-22.42-15.2a28.94 28.94 0 0 0-15.859 4.495 22.3 22.3 0 0 0-10.361 19.065 39.8 39.8 0 0 0 1.234 9.951c1.51 5.858 4.564 11.891 10.013 17.629l.153.16a76.3 76.3 0 0 0 20.872 15.396c12.153 6.179 27.115 10.064 44.488 10.064Zm-802.94-31.16v4.94c0 14.82 10.64 25.46 25.46 25.46 14.44 0 25.08-10.64 25.08-23.18v-106.4c0-43.286-24.165-67.624-60.357-73.949a117.5 117.5 0 0 0-20.203-1.671c-26.6 0-52.44 10.64-65.36 26.98a46 46 0 0 0-6.661 10.978 32.5 32.5 0 0 0-2.459 12.582 23.43 23.43 0 0 0 4.562 14.304c3.114 4.113 7.698 7.049 13.364 8.261a28.8 28.8 0 0 0 6.014.615 30 30 0 0 0 6.993-.777c9.833-2.345 14.591-9.54 19.607-15.183 6.08-6.84 14.06-11.4 25.84-11.4 14.82 0 24.32 8.36 24.32 23.18v13.3h-35.34a96 96 0 0 0-30.198 4.507c-13.826 4.581-24.623 12.493-31.806 22.996a61.4 61.4 0 0 0-10.196 35.197 60.39 60.39 0 0 0 39.955 56.047 69.7 69.7 0 0 0 24.645 4.373 61.3 61.3 0 0 0 19.888-3.149c7.204-2.47 13.231-6.276 17.785-10.989a33.8 33.8 0 0 0 9.067-17.022Zm597.36-40.66v-17.1h69.92c19.293 0 31.784-8.435 35.17-25.305a51 51 0 0 0 .93-10.035v-4.56a92.4 92.4 0 0 0-5.576-33.054c-8.728-22.863-27.327-37.28-53.123-42.196a112.8 112.8 0 0 0-21.101-1.89 100.6 100.6 0 0 0-34.319 5.513c-24.981 9.053-40.615 28.923-44.518 57.124a106 106 0 0 0-.963 14.503v51.68c0 48.26 30.78 77.14 82.84 77.14a99.9 99.9 0 0 0 27.652-3.746c14.975-4.315 27.151-12.113 35.428-22.094a56 56 0 0 0 6.565-9.739c2.825-5.379 4.835-11.612 4.835-18.381a23.86 23.86 0 0 0-2.678-11.263 23.89 23.89 0 0 0-21.262-12.297 26.8 26.8 0 0 0-9.098 1.468c-5.265 1.883-9.316 5.53-12.522 10.643a41 41 0 0 0-1.94 3.469 29.26 29.26 0 0 1-23.34 16.143 33 33 0 0 1-3.64.197c-19.38 0-29.26-9.5-29.26-26.22Zm-840.18 42.18v-31.92h19a110.8 110.8 0 0 0 39.856-6.883c32.587-12.51 51.507-41.032 52.447-76.936a108 108 0 0 0 .037-2.821v-25.46a86.5 86.5 0 0 0-9.859-41.968c-13.4-24.45-40.176-39.226-78.583-40.073a160 160 0 0 0-3.518-.039h-46.74a37.3 37.3 0 0 0-12.966 2.114C6.105 26.684.003 36.404.003 50.542v196.08c0 15.43 10.356 26.977 25.095 28.667a33 33 0 0 0 3.785.213 28.68 28.68 0 0 0 17.849-5.922c5.66-4.425 9.458-11.061 10.414-18.974a33 33 0 0 0 .237-3.984Zm751.64.76v-148.2a29.25 29.25 0 0 0-4.389-15.797c-4.826-7.605-13.252-12.323-23.351-12.323a29.04 29.04 0 0 0-16.008 4.544c-6.488 4.232-10.832 11.15-11.871 19.594a33 33 0 0 0-.241 3.982v148.2a29.04 29.04 0 0 0 4.543 16.008c4.232 6.488 11.15 10.832 19.594 11.871a33 33 0 0 0 3.983.241c14.489 0 25.533-9.708 27.446-23.724a32.5 32.5 0 0 0 .294-4.396ZM57.383 71.822h20.14c22.04 0 33.82 9.88 33.82 28.88v27.74a41.8 41.8 0 0 1-3.094 16.556c-4.795 11.15-15.164 18.024-31.106 18.024h-19.76zm723.9-13.3a29.5 29.5 0 0 0 18.557-6.269c6.1-4.854 10.049-12.186 10.629-20.78a33 33 0 0 0 .074-2.211 29.5 29.5 0 0 0-6.269-18.557C799.42 4.605 792.087.656 783.494.076a33 33 0 0 0-2.211-.074 29.5 29.5 0 0 0-18.558 6.269c-6.1 4.854-10.048 12.187-10.628 20.78a33 33 0 0 0-.074 2.211 29.5 29.5 0 0 0 6.269 18.558c4.854 6.1 12.186 10.048 20.78 10.628a33 33 0 0 0 2.211.074Zm-509.2 135.28h24.32v4.18c0 18.462-9.58 31.496-26.397 33.54a40 40 0 0 1-4.763.28 30.6 30.6 0 0 1-8.344-1.067c-8.3-2.354-12.838-8.431-12.935-16.529l-.001-.264c0-10.959 6.672-19.46 25.756-20.101a70 70 0 0 1 2.364-.039Zm677.92-51.68v6.46h-52.44v-6.46c0-16.72 8.74-26.22 26.22-26.22a35.7 35.7 0 0 1 10.456 1.412c8.046 2.465 13.012 8.098 14.898 16.422a38 38 0 0 1 .866 8.386Z"
      fontSize="12"
      vectorEffect="non-scaling-stroke"
    ></path>
  </svg>

  {/* <svg
    className='lg:hidden block'
    xmlns="http://www.w3.org/2000/svg"
    width="350"
    height="100"
    viewBox="0 0 1189.506 418.506"
  >
    <path
      id="svgGroup"
      fill="#fff"
      fillRule="evenodd"
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth="0.945"
      d="m1117.504 388.506 70.5-271.5a69 69 0 0 0 1.101-6.369c.266-2.139.399-4.084.399-5.631a41.15 41.15 0 0 0-5.205-20.513 35.44 35.44 0 0 0-31.295-17.987c-17.08 0-29.312 10.909-34.878 26.554a55 55 0 0 0-1.622 5.446l-15.5 66.5c-11 47.5-20 95-25 123.5-2.825-27.301-10.523-70.111-20.593-115.081a1732 1732 0 0 0-1.907-8.419l-15.5-66.5a47.9 47.9 0 0 0-8.517-18.475c-6.359-8.167-15.479-13.184-26.808-13.508a41 41 0 0 0-1.175-.017c-19.5 0-36.5 14.5-36.5 37.5 0 2.844 0 5.687.536 9.336a53 53 0 0 0 .464 2.664l40 173.5a45.4 45.4 0 0 0 7.632 16.86c8.486 11.333 22.161 16.64 38.868 16.64h8.5l-12.5 51.5a42 42 0 0 0-1.087 6.646c-1.723 21.288 14.21 37.354 35.087 37.354a33.97 33.97 0 0 0 28.967-15.969 46.8 46.8 0 0 0 6.033-14.031Zm-413-148.5v-26.5c0-18.5-15-34-33.5-34-19 0-34 15.5-34 34v29a60.5 60.5 0 0 1-1.02 11.744c-2.705 13.588-10.941 20.256-26.48 20.256-17.699 0-25.419-8.677-26.393-27.647a85 85 0 0 1-.107-4.353v-112.5h87c17 0 31-14 31-31s-14-31-31-31h-87v-23.5c0-20-16-36.5-36-36.5-20.5 0-36.5 16.5-36.5 36.5v194a122.6 122.6 0 0 0 6.407 40.955c10.797 30.538 34.819 49.357 68.823 55.137a142 142 0 0 0 23.77 1.908 122 122 0 0 0 40.025-6.096c35.65-12.365 54.975-43.285 54.975-90.404Zm239.5 0v-26.5c0-18.5-15-34-33.5-34-19 0-34 15.5-34 34v29a60.5 60.5 0 0 1-1.02 11.744c-2.705 13.588-10.941 20.256-26.48 20.256-17.699 0-25.419-8.677-26.393-27.647a85 85 0 0 1-.107-4.353v-112.5h87c17 0 31-14 31-31s-14-31-31-31h-87v-23.5c0-20-16-36.5-36-36.5-20.5 0-36.5 16.5-36.5 36.5v194a122.6 122.6 0 0 0 6.407 40.955c10.797 30.538 34.819 49.357 68.823 55.137a142 142 0 0 0 23.77 1.908 122 122 0 0 0 40.025-6.096c35.65-12.365 54.975-43.285 54.975-90.404Zm-549 55.5v6.5a34.7 34.7 0 0 0 5.242 18.835c5.78 9.058 15.918 14.665 28.258 14.665a34.9 34.9 0 0 0 18.461-5.094 29.93 29.93 0 0 0 14.539-25.406v-140c0-67-44-99.5-106-99.5-35 0-69 14-86 35.5a60.6 60.6 0 0 0-8.764 14.444 42.8 42.8 0 0 0-3.236 16.556 30.82 30.82 0 0 0 6.003 18.82c4.097 5.412 10.128 9.276 17.584 10.87a38 38 0 0 0 7.913.81c19.5 0 27-12 35-21 7.843-8.824 18.09-14.765 33.097-14.993a59 59 0 0 1 .903-.007c19.5 0 32 11 32 30.5v17.5h-46.5a126.3 126.3 0 0 0-39.735 5.929c-35.015 11.602-55.265 39.446-55.265 76.571a79.46 79.46 0 0 0 52.573 73.745 91.7 91.7 0 0 0 32.427 5.755c21.372 0 38.674-7.327 49.569-18.604a44.5 44.5 0 0 0 11.931-22.396Zm-319.5 2v-42h25a145.8 145.8 0 0 0 52.442-9.057c42.877-16.461 67.773-53.989 69.009-101.231a142 142 0 0 0 .049-3.712v-33.5a113.8 113.8 0 0 0-12.973-55.221C191.399 20.613 156.168 1.171 105.633.056a210 210 0 0 0-4.629-.05h-61.5a49.1 49.1 0 0 0-17.061 2.78C10.791 7.094 3.311 16.28.875 29.474a55.3 55.3 0 0 0-.871 10.032v258a39.02 39.02 0 0 0 6.473 22.067c5.824 8.608 15.198 14.351 26.547 15.652a44 44 0 0 0 4.98.281 37.73 37.73 0 0 0 23.486-7.792c7.447-5.823 12.444-14.554 13.702-24.967a44 44 0 0 0 .312-5.241Zm0-230h26.5c25.751 0 40.858 10.251 43.919 30.052a52 52 0 0 1 .581 7.948v36.5a55 55 0 0 1-4.071 21.784c-4.659 10.831-13.314 18.596-25.966 21.918a58.9 58.9 0 0 1-14.963 1.798h-26zm282.5 160.5h32v5.5a55.3 55.3 0 0 1-3.664 20.62c-5.233 13.05-15.919 21.669-31.069 23.51a52 52 0 0 1-6.267.37 40.3 40.3 0 0 1-10.979-1.405c-11.039-3.131-17.021-11.267-17.021-22.095 0-15 9.5-26.5 37-26.5Z"
      fontSize="12"
      vectorEffect="non-scaling-stroke"
    ></path>
  </svg> */}

        <div className='flex lg:flex-row flex-col lg:items-center items-start justify-between mt-[2rem]'>
             <ul className='text-white flex lg:flex-row flex-col lg:items-center items-start gap-[1rem]'>
                 <li><a href="" className='patty text-[1.5rem] uppercase'>@2024</a></li>
                 <li><a href="" className='patty text-[1.5rem] uppercase'>SHIPPING & DELIVERY</a></li>
                 <li><a href="" className='patty text-[1.5rem] uppercase'>PRIVACY POLICY</a></li>
             </ul>

             <ul className='text-white flex items-center gap-[1rem] lg:mt-0 mt-[1.5rem]'>
                 <li><a href="" className='patty text-[1.5rem] uppercase'>TWITTER (X)</a></li>
                 <li><a href="" className='patty text-[1.5rem] uppercase'>GITHUB</a></li>
                 <li><a href="" className='patty text-[1.5rem] uppercase'>LINKEDIN</a></li>
             </ul>
        </div>
    </footer>
  )
}

export default Footer