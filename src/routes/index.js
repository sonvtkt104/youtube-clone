import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { 
    Home,
    Detail,
    Demo
} from '../pages'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/video" element={<Detail />} />
                <Route path="/demo" element={<Demo />} />
            </Routes>
        </BrowserRouter>
    )
}