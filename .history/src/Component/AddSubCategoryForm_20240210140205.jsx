import { useEffect, useState } from 'react';
import PrimaryButton from './PrimaryButton';
import {
  useAddSubCategoryMutation,
  useGetCategorySubCategoryQuery,
} from '../features/admin';

function AddSubCategoryForm() {
  const [cat, setCat] = useState([]);
  console.log(cat, 'here');
  const [addSubCategory] = useAddSubCategoryMutation();
  const { data: category } = useGetCategorySubCategoryQuery();
  console.log(category);
  const [subcategory, setSubCategory] = useState({
    parentCategory: '',
    english: '',
    kurdi: '',
    arabic: '',
  });
  const handleInput = (e) => {
    //     setCity(e.target.value);
    setSubCategory({ ...subcategory, [e.target.name]: e.target.value });
  };
  //   };
  const handleFormData = () => {
    addSubCategory(subcategory);
    console.log(subcategory);
  };
  useEffect(() => {
    setCat([]);
    category?.data.map((category) => {
      category.name.map((name) => {
        if (name.lang == 'english') {
          setCat((prev) => [
            ...prev,
            {
              name: name.name,
              _id: category._id,
            },
          ]);
        }
      });
    });
  }, [category?.data]);
  return (
    <div className="flex flex-col text-gray-800">
      <div className="mt-5 flex flex-col">
                 <label htmlFor="english">Category</label>
                 import { useState, useEffect } from 'react';
import {
  useAddProductMutation,
  useUploadsMutation,
} from '../../app/api/profile';
import { useGetCityQuery } from '../../app/api/city';
import { useGetCategorySubCategoryQuery } from '../../app/api/category';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from '../Select';
import { useSelector } from 'react-redux';

function AddProduct() {
  const language = useSelector((state) => state.language.language);
  const [addProduct, {data:addData, isError: addError, isLoading: addLoading }] =
    useAddProductMutation();
  const [
    uploadImage,
    { data: imageData, isError: imageError, isLoading: imageLoading },
  ] = useUploadsMutation();
  const { data: catData } = useGetCategorySubCategoryQuery();
  const { data: cityData } = useGetCityQuery();
  const [images, setImages] = useState([]);
  const [imageFile, setImageFile] = useState([]);
  const [canAdd, setCanAdd] = useState(false);
  const [cityState, setCityState] = useState([]);
  useEffect(() => { setCityState([]);
    cityData?.data.map((city) => {
      city.name.map((name) => {
        if(name.lang==language){
          setCityState((prev) => [...prev, {
            name: name.name,
            _id: city._id
          }]);
        }
      });
    })
  }, [,language,cityData]);
  // Retrieve user info from localStorage
  const userInfo = JSON.parse(localStorage.getItem('userData')) || {};
  // check data add or not
  useEffect(() => {
    if(!addError&&!addLoading && addData?.status=="success"){
      setFormData({
        owner: userInfo?.data._id,
        name: '',
        phone: '',
        Parentcategory: '',
        category: '',
        city: '',
        address: '',
        images: [],
        description: '',
      });
      setImages([]);
      setImageFile([]);
      setCanAdd(false);
    toast.success(language === 'kurdi' ? 'کاڵاکە بە سەرکەوتوویی زیادکرا' : language === 'arabic' ? 'تمت إضافة المنتج بنجاح' : 'Product added successfully');
    return;
    }
    else if(addData?.status=="error"){
      toast.error(language === 'kurdi' ? 'کاڵاکە شکستی هێنا لە زیاد کردن!' : language === 'arabic' ? 'فشل في إضافة المنتج!' : 'Failed to add product!');
    }
  },[addData?.data])
  const [formData, setFormData] = useState({
    owner: userInfo?.data._id,
    name: '',
    phone: '',
    Parentcategory: '',
    category: '',
    city: '',
    address: '',
    images: [],
    description: '',
  });

// Handle image upload
const handleImageUpload = (e) => {
  try{const files = e.target.files;
    const allowedExtensions = ['jpg', 'jpeg', 'png'];
    const maxImages = 5;
  
    // Check the number of images
    if (imageFile.length + files.length > maxImages) {
      toast.error(language === 'kurdi' ? 'تەنها دەتوانیت تا ٥ وێنە باربکەیت' :language === 'arabic' ? 'لا يمكنك تحميل اكثر من 5 صور' : 'You can only upload up to 5 images');
      return;
    }
  
    // Check file extensions
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileNameParts = file.name.split('.');
      const fileExtension =
        fileNameParts[fileNameParts.length - 1].toLowerCase();
  
      if (!allowedExtensions.includes(fileExtension)) {
        toast.error(language === 'kurdi' ? 'تکایە تەنها فایلەکانی jpg و jpeg و png باربکەن.!' :language === 'arabic' ? 'يُرجى تحميل ملفات jpg وjpeg وpng فقط.!' : 'Please upload only jpg, jpeg, and png files.');
        return; // Stop processing if an invalid file is found
      }
    }
  
    // Convert files to an array and set it in state
    setImageFile((prevImageFile) => [...prevImageFile, ...Array.from(files)]);
  
    // Process valid files
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
  
      reader.onload = (e) => {
        setImages((prevImages) => [...prevImages, e.target.result]);
      };
      reader.readAsDataURL(files[i]);
    }}
    catch(error){
      console.log(error)
    }
};
  // Handle removing images
  const removeImage = (e) => {
    try {
      const targetId = parseInt(e.target.id);
  
      // Remove item from imageFile and images arrays
      const updatedImageFile = imageFile.filter((_, index) => index !== targetId);
      const updatedImages = images.filter((_, index) => index !== targetId);
  
      setImageFile(updatedImageFile);
      setImages(updatedImages);
    } catch (error) {
      console.error("An error occurred while removing the image:", error);
   }
  };
  // Handle form submission
  const handleSubmit = (e) => {
  try{  e.preventDefault();
    uploadImage(imageFile);
  }catch(error){
    console.log(error)
  }
  };

  // Handle image upload response
  useEffect(() => {
  try {
    if (!imageError && !imageLoading && imageData?.status === 'success') {
      setFormData({ ...formData, images: imageData.data });
      setCanAdd(true);
    }
  } catch (error) {
    console.error("An error occurred in the image useEffect:", error);
    // You can handle the error in a way that makes sense for your application
  }
}, [imageData, imageError, imageLoading]);

const [cat, setCat] = useState([]);
useEffect(() => {
  setCat([]);
    catData?.data.map((category) => {
      category.name.map((name) => {
        if(name.lang==language){
          setCat((prev) => [...prev, {
            name: name.name,
            _id: category._id
          }]);
        }
      });
    })
}, [,language,catData]);
const [subCat, setSub] = useState([]);
//handle subcategory
useEffect(() => {
  setSub([]);
  catData?.data.map((category) => {
    if(category._id==formData?.Parentcategory)
    {
      category.subCategory.map((name) => {
       name.name.map((value) => {
        if(value.lang==language){
          setSub((prev) => [...prev, {
            name: value.name,
            _id: name._id
          }]);
        }
       })
      })
    }
  })
}, [formData?.Parentcategory,language]);
  // Handle adding product after image upload
  useEffect(() => {
   try{ if (
    !imageError &&
    !imageLoading &&
    imageData?.status === 'success' &&
    canAdd
  ) {
    addProduct(formData);
  }}
  catch(error){
    console.log(error)
  }
  }, [formData.images]);
  // Handle form data changes
  const handleFormData = (e) => {
    try{if(e.target.name === 'description'){
      if(e.target.value.length > 300){
      toast.error(language=="kurdi"?"وەسفکردن لە ٣٠٠ پیت کەمتر بێت":language=="arabic"?"يجب أن يكون الوصف أقل من 300 حرف.":"Please enter a description with at most 300 characters.")
      return
      }
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });}
    catch(error){
      console.log(error)
    }
  };
  return (
    <> 
    <form
      onSubmit={handleSubmit}
      className={`w-full max-w-[2000px]
      flex flex-wrap justify-center 
      md:justify-between gap-x-2 
      gap-y-4 my-10 text-neutral-500 
      ${language!="english"&&"flex-row-reverse"}`}
    >
    
      {/* Product Name */}
      <div className="mt-1 w-full lg:w-[49%]">
        <label
          htmlFor="name"
          className={`block mb-2 text font-medium text-neutral-500 ${language!="english"&&"text-right"}`}
        >
          
          {language=="kurdi"?"ناوی بەرهەم":language=="arabic"?"اسم المنتج":"Product Name"}
          
        </label>
        <input
          id="name"
          value={formData.name}
          required={true}
          name="name"
          onChange={handleFormData}
          type="text"
          className={`hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500 pl-3 border-2 rounded-sm border-gray-400 focus:outline-none focus:border-green outline-none w-full text-neutral-600 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block px-1 py-2
           ${language!="english"&&"text-right"}`}
        />
      </div>

      {/* Phone Number */}
      <div className="mt-1 w-full lg:w-[49%]">
        <label
          htmlFor="phoneNumber"
          className={`block mb-2 text font-medium text-neutral-500 ${language!="english"&&"text-right"}`}
        >
          {language=="kurdi"?"ژمارەی مۆبایل":language=="arabic"?"رقم الهاتف":"Phone Number"}
        </label>
        <input
          id="phoneNumber"
          required={true}
          name="phone"
          value={formData.phone}
          onChange={handleFormData}
          type="tel"
          className={`hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500 pl-3 border-2 rounded-sm border-gray-400 focus:outline-none focus:border-green outline-none w-full text-neutral-600 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block px-1 py-2
           ${language!="english"&&"text-right"}`}
        />
      </div>

      {/* Category */}
      
     <Select
        name="Parentcategory"
        type="text"
        Label={language=="kurdi"?"پۆل":language=="arabic"?"فئة":"Category"}
        require={true}
        data={formData}
        setData={setFormData}
        value={formData.Parentcategory}
        disable={catData ? false : true}
        options={cat}
        select={language=="kurdi"?"پۆلێک هەڵبژێرە":language=="arabic"?"اختر الفئة":"Select category"}
      />

      {/* Subcategory */}
      
     <Select
        name="category"
        type="text"
        Label={language=="kurdi"?"پۆلی لاوەکی":language=="arabic"?"تصنيف فرعي":"Sub-category"}
        require={true}
        data={formData}
        setData={setFormData}
        value={formData.category}
        disable={catData ? false : true}
        options={subCat}
        select={language=="kurdi"?"پۆلێکی لاوەکی هەڵبژێرە":language=="arabic"?"حدد فئة فرعية":"Select category"}
      />
      {/* City */}
     <Select
        name="city"
        type="text"
        Label={language=="kurdi"?"شار":language=="arabic"?"مدينة":"City"}
        require={true}
        data={formData}
        setData={setFormData}
        value={formData.city}
        disable={catData ? false : true}
        options={cityState}
        select={language=="kurdi"?"شارێک هەڵبژێرە":language=="arabic"?"اختر مدينة":"Select city"}
      />

      {/* Address */}
      <div className="mt-1 w-full lg:w-[49%]">
        <label
          htmlFor="address"
          className={`block mb-2 text font-medium text-neutral-500 ${language!="english"&&"text-right"}`}
        >
          
        {language=="kurdi"?"ناونیشان":language=="arabic"?"عنوان":"Address"}
        </label>
        <input
          id="address"
          required={true}
          value={formData.address}
          name="address"
          onChange={handleFormData}
          type="text"
          className={`hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500 pl-3 border-2 rounded-sm border-gray-400 focus:outline-none focus:border-green outline-none w-full text-neutral-600 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block px-1 py-2
           ${language!="english"&&"text-right"}`} />
      </div>

      {/* Images */}
      <div className="mt-1 w-full lg:w-[49%] h-[200px] overflow-hidden">
        <label
          htmlFor="image"
          className={`block mb-2 text font-medium text-neutral-500 ${language!="english"&&"text-right"}`}
        >
          
        {language=="kurdi"?"وێنەکان":language=="arabic"?"صور":"Images"}
        </label>
        <div className="border-2 border-gray-400 w-[100%] h-[165px]">
          {images.length !== 0 && (
            <div className="overflow-auto p-1 flex flex-wrap justify-start gap-1 w-[100%] h-[110px]">
              {/* Image show */}
              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-16 h-16 rounded-md overflow-hidden relative"
                >
                  <svg
                    onClick={removeImage}
                    id={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 absolute rounded-md p-[2px] bg-red-600 text-white left-[2px] right-[2px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                  <img
                    key={index}
                    src={image}
                    className="w-full h-full"
                    alt={`Image ${index}`}
                  />
                </div>
              ))}
            </div>
          )}
          <input
            multiple={true}
            required={true}
            onChange={handleImageUpload}
            type="file"
            name="image"
            id="image"
            className="hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500 pl-3 rounded-sm border-gray-400 focus:outline-none focus:border-green bg-gray-50 text-neutral-600 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block px-1 py-2 w-full mt-1"
          />
        </div>
      </div>

      {/* Description */}
      <div className="mt-1 w-full lg:w-[49%] h-[200px] overflow-hidden">
        <label
          htmlFor="description"
          className={`block mb-2 text font-medium text-neutral-500 ${language!="english"&&"text-right"}`}
        >
          
        {language=="kurdi"?"وەسف":language=="arabic"?"وصف":"Description"}
        </label>
        <textarea
          id="description"
          required={true}
          name="description"
          onChange={handleFormData}
          value={formData.description}
          className={`hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500 pl-3 rounded-sm border-gray-400 focus:outline-none focus:border-green outline-none p-1 border-2 text-neutral-600 w-[100%] h-[165px]
           ${language!="english"&&"text-right"}`}
        ></textarea>
      </div>

      <button
        className={`mt-3 outline-none text-white bg-jade-700 
        font-medium 
        rounded px-1 py-2  text-center flex justify-center 
        gap-x-2 w-full lg:w-[49%] ${
          imageError || imageLoading || addError || addLoading
            ? 'opacity-40'
            : ''
        }`}
        disabled={imageError || imageLoading || addError || addLoading}
      >
      
      {language=="kurdi"?"زیادکردنی بەخشین":language=="arabic"?"أضف تبرع":"Add Donate"}
      </button>
    </form><ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    /></>
   
  );
}

export default AddProduct;
        {/* <input
          id="english"
          value={subcategory.english}
          onChange={(e) => handleInput(e)}
          required={true}
          name="english"
          className="mt-2 w-96 focus:outline-none border-2 py-2 rounded-sm p-2 hover:duration-300 duration-300 border-gray-400 hover:border-gray-500 focus:border-green"
          placeholder="city"
        /> */}
      </div>
      <div className="mt-5 flex flex-col">
        <label htmlFor="english">English Name</label>
        <input
          id="english"
          value={subcategory.english}
          onChange={(e) => handleInput(e)}
          required={true}
          name="english"
          className="mt-2 w-96 focus:outline-none border-2 py-2 rounded-sm p-2 hover:duration-300 duration-300 border-gray-400 hover:border-gray-500 focus:border-green"
          placeholder="city"
        />
      </div>
      <div className="mt-5 flex flex-col">
        <label htmlFor="kurdi">Kurdish Name</label>
        <input
          id="kurdi"
          value={subcategory.kurdi}
          onChange={(e) => handleInput(e)}
          required={true}
          name="kurdi"
          className="mt-2 w-96 focus:outline-none border-2 py-2 rounded-sm p-2 hover:duration-300 duration-300 border-gray-400 hover:border-gray-500 focus:border-green"
          placeholder="city"
        />
      </div>
      <div className="mt-5 flex flex-col">
        <label htmlFor="english">Arabic Name</label>
        <input
          id="arabic"
          value={subcategory.arabic}
          onChange={(e) => handleInput(e)}
          required={true}
          name="arabic"
          className="mt-2 w-96 focus:outline-none border-2 py-2 rounded-sm p-2 hover:duration-300 duration-300 border-gray-400 hover:border-gray-500 focus:border-green"
          placeholder="city"
        />
      </div>
      <div className="mt-5">
        <PrimaryButton
          text="Add Sub Category"
          color={'green'}
          widthbutton={'24rem'}
          textColor="neutral-100"
          align={'center'}
          onClick={() => handleFormData()}
        />
      </div>
    </div>
  );
}

export default AddSubCategoryForm;
