import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit {
    id: number;
    editMode = false;
    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.id = +params['id'];
            // si la url tiene parametros en su id, cambiamos 'editMode' a true
            this.editMode = params['id'] ? true : false;
            console.log(this.editMode);
        });
    }
}
