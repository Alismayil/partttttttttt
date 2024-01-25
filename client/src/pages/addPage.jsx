import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

function AddPage() {
  const [product, setProduct] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState(null)

  function handleSortName1() {
    const sortName=product.sort((a,b)=>(a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
    setProduct(sortName)
  }

  function handleSortName2() {
    const sortName=product.sort((a,b)=>(a.name < b.name ? 1 : b.name < a.name ? -1 : 0))
    setProduct(sortName)
  }
  async function getData() {
    const res = await axios.get('http://localhost:3000/exam')
    setProduct(res.data)
  }
  async function deleteData(id) {
    await axios.delete(`http://localhost:3000/exam/${id}`)
    getData()
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <Formik
        initialValues={{ name: '', price: '' }}
        validationSchema={Yup.object({
          name: Yup.string()
          .matches(/^[a-zA-Z ]+$/, "Only String Text")
            .required('Required'),
          price: Yup.number()
            .positive('Plural pls')
            .required('Required')
            .test('len', 'Vijdan undefined', (val) => val.toString().length <= 6)
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          await axios.post('http://localhost:3000/exam', values)
          setSubmitting(false);
          toast('Created New Product', {
            icon: '⏳',
          });
          resetForm()
          getData()

        }}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />

          <label htmlFor="price">Price</label>
          <Field name="price" type="number" />
          <ErrorMessage name="price" />

          <button type="submit">Add</button>
        </Form>
      </Formik>
      {
        product && product
        .filter((x)=>x.name.toLowerCase().includes(search.toLowerCase()))
          .sort((a, b) => {
            if (sort && sort.asc === true) {
              return (a[sort.property] > b[sort.property]) ? 1 : ((b[sort.property] > a[sort.property]) ? -1 : 0)
            } else if (sort && sort.asc === false) {
              return (a[sort.property] < b[sort.property]) ? 1 : ((b[sort.property] < a[sort.property]) ? -1 : 0)
            }
            else {
              return 0
            }
          }
          )
          .map((item) => (
            <div style={{ border: '1px solid gray' }}>
              <p>{item.name}</p>
              <p>{item.price}$</p>
              <button onClick={() => deleteData(item._id)}>Delete</button>
            </div>
          ))
      }
      <input type="text" placeholder='Search' onChange={(e)=>setSearch(e.target.value)} />
      <button onClick={()=>setSort({property:"price",asc:true})}>0-9</button>
      <button onClick={()=>setSort({property:"price",asc:false})}>9-0</button>
      <button onClick={(e)=>handleSortName1(e)}>A-z</button>
      <button onClick={(e)=>handleSortName2(e)}>Z-a</button>
      <button onClick={()=>setSort(null)}>Default</button>
    </div>
  )
}

export default AddPage