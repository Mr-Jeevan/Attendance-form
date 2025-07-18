import React, { useState } from 'react';

const McaOne = () => {
    const [students, setStudents] = useState([
        { id: 1, name: 'Alice', present: false },
        { id: 2, name: 'Bob', present: false },
        { id: 3, name: 'Charlie', present: false },
        { id: 4, name: 'David', present: false },
        { id: 5, name: 'Eve', present: false },
        { id: 6, name: 'Frank', present: false },
        { id: 7, name: 'Grace', present: false },
        { id: 8, name: 'Heidi', present: false },
        { id: 9, name: 'Ivan', present: false },
        { id: 10, name: 'Judy', present: false },
    ]);

    const handleAttendance = (id) => {
        setStudents((prev) =>
            prev.map((student) =>
                student.id === id ? { ...student, present: !student.present } : student
            )
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const attendance = students.map(({ id, name, present }) => ({
            id,
            name,
            present,
        }));
        // In a real application, you'd send 'attendance' to your backend here
        alert('Attendance Submitted!\n' + JSON.stringify(attendance, null, 2));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-700 p-8 flex items-center justify-center font-sans">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-2xl w-full max-w-md">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
                    MCA First Year Attendance
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"
                                    >
                                        Roll No.
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider"
                                    >
                                        Present
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {students.map((student) => (
                                    <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {student.id}
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800">
                                            {student.name}
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap text-center">
                                            <label className="inline-flex items-center cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="form-checkbox h-5 w-5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 transition duration-150 ease-in-out"
                                                    checked={student.present}
                                                    onChange={() => handleAttendance(student.id)}
                                                />
                                                <span className="sr-only">Mark {student.name} as {student.present ? 'absent' : 'present'}</span>
                                            </label>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg
                                   shadow-md transition duration-300 ease-in-out transform hover:scale-105
                                   focus:outline-none focus:ring-4 focus:ring-indigo-300 active:scale-95"
                    >
                        Submit Attendance
                    </button>
                </form>
            </div>
        </div>
    );
};

export default McaOne;