import React, { useEffect, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useForm } from 'react-hook-form';

const Section = ({ section, index, moveSection, setSections, sections }) => {
  const { register, handleSubmit, setValue, watch } = useForm({ defaultValues: { content: section.content } });
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: 'SECTION',
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveSection(draggedItem.index, index);
        draggedItem.index = index;
      }
    }
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'SECTION',
    item: { type: 'SECTION', index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      const newSections = sections.map((s, i) => i === index ? { ...s, content: value.content } : s);
      setSections(newSections);
    });

    return () => subscription.unsubscribe();
  }, [watch, sections, index, setSections]);

  const onSubmit = data => {
    const newSections = sections.map((s, i) => i === index ? { ...s, content: data.content } : s);
    setSections(newSections);
  };
  const deleteSection = (id) => {
    setSections(sections.filter(section => section.id !== id));
  };
  const handleMediaUpload = (e) => {
    const file = e.target.files[0];
    const newSections = sections.map((s, i) => i === index ? { ...s, media: [...s.media, URL.createObjectURL(file)] } : s);
    setSections(newSections);
  };

  drag(drop(ref));

  return (
    <div ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }} className="section">
      <h2>{section.type}</h2>
      <button onClick={() => deleteSection(section.id)}>Delete</button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea {...register('content')} />
      </form>
      {['Image', 'Video', 'Audio'].includes(section.type) && (
        <input type="file" onChange={handleMediaUpload} />
      )}
      {section.media.map((url, i) => {
        if (section.type === 'Image') return <img key={i} src={url} alt="Uploaded" style={{ width: '100%' }} />;
        if (section.type === 'Video') return <video key={i} src={url} controls style={{ width: '100%' }} />;
        if (section.type === 'Audio') return <audio key={i} src={url} controls />;
        return null;
      })}
    </div>
  );
};

export default Section;
