import { ChangeEvent, FormEvent, ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHeroes } from 'store/actions/heroesActions';
import { hideModal } from 'store/actions/modalActions';
import { showSnackbar } from 'store/actions/snackbarActions';
import {
    IHero,
    IHeroesState,
    INewHero,
    IType,
    RootState,
    SnackbarSeverity,
} from 'types';
import { addNewHero } from 'utils/rest';
import Schema from 'validate';

export default function AddHero(): ReactElement {
    const dispatch = useDispatch();

    const [newHero, setNewHero] = useState<INewHero>({
        avatarUrl: '',
        fullName: '',
        typeId: '',
        description: '',
    });

    const types: IType[] = useSelector(
        (state: RootState) => state.typesReducer
    );

    const { heroes, totalCount }: IHeroesState = useSelector(
        (state: RootState) => state.heroesReducer
    );

    const handleChange = (
        e:
            | ChangeEvent<HTMLInputElement>
            | ChangeEvent<HTMLSelectElement>
            | ChangeEvent<HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setNewHero({ ...newHero, [name]: value });
    };

    const handleAddNewHero = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const constraints = new Schema({
            avatarUrl: {
                type: String,
                message: 'You need to provide correct avatar url',
                match: /[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)/,
            },
            fullName: {
                type: String,
                length: { min: 4, max: 32 },
                message: 'Name should be between 4 and 32 characters',
            },
            typeId: {
                type: String,
                length: { min: 1 },
                message: "You need to choose Hero's type",
            },
            description: {
                type: String,
                length: { min: 10, max: 150 },
                message: 'Description should be between 10 and 150 characters',
            },
        });

        const errors: any = constraints.validate(newHero);

        if (errors.length > 0) {
            return dispatch(
                showSnackbar(SnackbarSeverity.WARNING, errors[0].message)
            );
        }

        addNewHero(newHero).then((addedHero: IHero | undefined) => {
            if (addedHero) {
                const updatedHeros: IHero[] = [addedHero, ...heroes];
                dispatch(
                    setHeroes({
                        totalCount: totalCount + 1,
                        heroes: updatedHeros,
                    })
                );
                dispatch(
                    showSnackbar(
                        SnackbarSeverity.SUCCESS,
                        addedHero.fullName + ' added successfully!'
                    )
                );
                dispatch(hideModal());
            } else {
                dispatch(
                    showSnackbar(SnackbarSeverity.ERROR, 'Something went wrong')
                );
            }
        });
    };

    return (
        <form onSubmit={handleAddNewHero} className="h-full flex flex-col">
            <p className="font-bold">Add hero</p>

            <div className="w-20 h-20 rounded-full bg-blue-500 mt-8 mb-4 mr-4"></div>

            <label
                htmlFor="avatarUrl"
                className="block text-sm font-medium text-gray-500"
            >
                Avatar URL
            </label>
            <input
                required
                onChange={handleChange}
                type="text"
                name="avatarUrl"
                id="avatarUrl"
                className="mt-1 block w-full border-0 focus:ring-emerald-500 focus:border-emerald-500 rounded-md mb-2"
            />

            <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-500"
            >
                Full name
            </label>
            <input
                required
                onChange={handleChange}
                type="text"
                name="fullName"
                id="fullName"
                className="mt-1 block w-full border-0 focus:ring-emerald-500 focus:border-emerald-500 rounded-md mb-2"
            />

            <label
                htmlFor="typeId"
                className="block text-sm font-medium text-gray-500"
            >
                Type
            </label>
            <select
                onChange={handleChange}
                id="typeId"
                name="typeId"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-0 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md mb-2 text-gray-500"
                defaultValue="Select type"
            >
                <option disabled>Select type</option>
                {types.map((type: IType) => (
                    <option key={type.id} value={type.id}>
                        {type.name}
                    </option>
                ))}
            </select>

            <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-500"
            >
                Description
            </label>
            <textarea
                required
                onChange={handleChange}
                name="description"
                id="description"
                rows={6}
                className="mt-1 block w-full border-0 focus:ring-emerald-500 focus:border-emerald-500 rounded-md resize-none mb-auto"
            />

            <button className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold w-full rounded-md py-2 px-4 sm:mt-4">
                Save
            </button>
        </form>
    );
}
