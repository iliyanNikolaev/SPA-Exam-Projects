import { html } from '../../node_modules/lit-html/lit-html.js';
import { editOfferById, getOfferById } from '../data/offers.js';
import { createSubmitHandler } from '../util.js';

const editTemplate = (offer, onEdit) => html`
<section id="edit">
<div class="form" @submit=${onEdit}>
  <h2>Edit Offer</h2>
  <form class="edit-form">
    <input  type="text" name="title" id="job-title" placeholder="Title" value="${offer.title}" />
    <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" value="${offer.imageUrl}" />
    <input type="text" name="category" id="job-category" placeholder="Category" value="${offer.category}"/>
    <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50">${offer.description}</textarea>
    <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4" cols="50">${offer.requirements}</textarea>
    <input type="text" name="salary" id="job-salary" placeholder="Salary" value="${offer.salary}" />

    <button type="submit">post</button>
  </form>
</div>
</section>
`;

export const showEdit = async (ctx) => {
    const id = ctx.params.id;
    const offer = await getOfferById(id);
    ctx.render(editTemplate(offer, createSubmitHandler(onEdit)));

    async function onEdit({ title, imageUrl, category, description, requirements, salary }, form) {
        if(!title || !imageUrl || !category || !description || !requirements || !salary) {
            return alert('All fields are required!');
        }

        await editOfferById(id, { title, imageUrl, category, description, requirements, salary });
        form.reset();
        ctx.page.redirect('/dashboard');
    }
}