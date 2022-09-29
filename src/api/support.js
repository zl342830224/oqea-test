import axios from '../utils/axios'

//Get All MedicineSupportList
export const getMedicineSupports = (params) => axios.get('/medicinesupports', {...params})

//add new MedicineSupport
export const createMedicineSupport = (params) => axios.post('/medicinesupports', {...params})

//update MedicineSupport
export const updateMedicineSupport = (id, params) => axios.patch(`/medicinesupports/${id}`, {...params})

//delete new MedicineSupport
export const deleteMedicineSupport = (id, params) => axios.delete(`/medicinesupports/${id}`, {...params})