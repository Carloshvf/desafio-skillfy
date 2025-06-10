type Props = {
  isEditMode: boolean;
  isSaving: boolean;
  onSave: () => void;
  onDelete?: () => void;
};

const FormActions = ({ isEditMode, isSaving, onSave, onDelete }: Props) => {
  return (
    <div className="flex gap-4 justify-end mt-6">
      {isEditMode && onDelete && (
        <button
          onClick={onDelete}
          className="text-red-600 border border-red-500 px-4 py-2 rounded"
        >
          Excluir
        </button>
      )}

      <button
        onClick={onSave}
        disabled={isSaving}
        className="bg-secondary text-white px-4 py-2 rounded"
      >
        {isSaving ? "Salvando..." : isEditMode ? "Atualizar" : "Salvar"}
      </button>
    </div>
  );
};

export default FormActions;
