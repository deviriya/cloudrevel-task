"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    CustomModal,
    CNMoadlContent,
    CNMoadlText,
    CNMoadlHeader,
} from '@/components/ui/modal';
import { useState } from "react";
import { Button } from "@/components/ui/button"
import AddCrud from "@/components/pages/addCrud";
import { Edit, PlusCircle, Trash } from "lucide-react";
import EditCrud from "@/components/pages/editCrud";

export function TableDemo() {

    // useStates
    const [list, setList] = useState([])
    const [editData, setEditdata] = useState({});

    // Modals
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open)
    const [openEdit, setOpenEdit] = useState(false);
    const toggleEdit = (item) => {
        setEditdata(item)
        setOpenEdit(!openEdit)
    }

    // Crud func.
    const handleAddobj = async (item) => {
        setList([...list, item])
    }

    const handleDelete = (id) => {
        let newArr = list.filter((x) => x.id !== id)
        setList([...newArr]);
    }

    const handleEdit = (item) => {
        var Index = list.findIndex(x => x.id === item.id);
        list[Index] = item;
    }

    return (
        <section>
            <div className="flex justify-end">
                <Button onClick={toggle}><PlusCircle size={18} className="mr-2" /> Add User</Button>
            </div>
            {list.length > 0 ?
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[90px] text-center">S.NO</TableHead>
                            <TableHead>User Name</TableHead>
                            <TableHead>E-mail</TableHead>
                            <TableHead>Message</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {list.map((n, i) => (
                            <TableRow key={i}>
                                <TableCell className="font-medium text-center">{i + 1}</TableCell>
                                <TableCell>{n.name}</TableCell>
                                <TableCell>{n.email}</TableCell>
                                <TableCell>{n.message}</TableCell>
                                <TableCell>
                                    <div className="flex gap-8">
                                        <div className="cursor-pointer" onClick={() => toggleEdit(n)}>
                                            <Edit size={18} />
                                        </div>

                                        <div className="cursor-pointer" onClick={() => handleDelete(n.id)}>
                                            <Trash size={18} />
                                        </div>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                :
                <div className="flex justify-center items-center min-h-[80vh]">
                    No data found
                </div>
            }
            <CustomModal open={open}>
                <CNMoadlHeader toggle={toggle}>
                    <p className='text-2xl font-bold uppercase'>Add User</p>
                    <CNMoadlText>Fill user details to add.</CNMoadlText>
                </CNMoadlHeader>
                <CNMoadlContent>
                    <AddCrud handleAddobj={handleAddobj} toggle={toggle} />
                </CNMoadlContent>
            </CustomModal>

            <CustomModal open={openEdit}>
                <CNMoadlHeader toggle={toggleEdit}>
                    <p className='text-2xl font-bold uppercase'>Edit User</p>
                    <CNMoadlText>Edit user details here.</CNMoadlText>
                </CNMoadlHeader>
                <CNMoadlContent>
                    <EditCrud handleAddobj={handleEdit} toggleEdit={toggleEdit} data={editData} />
                </CNMoadlContent>
            </CustomModal>
        </section>
    )
}
