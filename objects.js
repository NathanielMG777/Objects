const movies = [{
    name: "Pirates of the Caribbean",
    year: 2003,
    director: "Gore Verbinski",
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a504c732-2487-47cd-9380-d08f32a02454/db5epcw-2a0aab20-0ad4-45d6-82f7-7946af17d868.png/v1/fill/w_256,h_256/at_world_s_end_folder_icon_by_dahlia069_db5epcw-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjU2IiwicGF0aCI6IlwvZlwvYTUwNGM3MzItMjQ4Ny00N2NkLTkzODAtZDA4ZjMyYTAyNDU0XC9kYjVlcGN3LTJhMGFhYjIwLTBhZDQtNDVkNi04MmY3LTc5NDZhZjE3ZDg2OC5wbmciLCJ3aWR0aCI6Ijw9MjU2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.GizH7_weeDh5g1KywMCthAP--Pz87GyuaynARgqIpis"
},{
    name: "Ready Player One",
    year: 2018,
    director: "Steven Spielberg",
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a504c732-2487-47cd-9380-d08f32a02454/dckl7i0-43ce750d-e286-4d04-9e16-ede0cf6cc512.png/v1/fill/w_256,h_256/ready_player_one_folder_icon_by_dahlia069_dckl7i0-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjU2IiwicGF0aCI6IlwvZlwvYTUwNGM3MzItMjQ4Ny00N2NkLTkzODAtZDA4ZjMyYTAyNDU0XC9kY2tsN2kwLTQzY2U3NTBkLWUyODYtNGQwNC05ZTE2LWVkZTBjZjZjYzUxMi5wbmciLCJ3aWR0aCI6Ijw9MjU2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.PYNRk58BjAlqwRIAV2J45hnTGavTUcRpm3s0DnQHMSo"
},{
    name: "Indiana Jones and the Last Crusade",
    year: 1989,
    director: "Steven Spielberg",
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a504c732-2487-47cd-9380-d08f32a02454/da219qf-fc1c84e8-8d0d-4a9f-954d-a15257ae20af.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E1MDRjNzMyLTI0ODctNDdjZC05MzgwLWQwOGYzMmEwMjQ1NFwvZGEyMTlxZi1mYzFjODRlOC04ZDBkLTRhOWYtOTU0ZC1hMTUyNTdhZTIwYWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.S9p4ilCUd03Kr0k6eSzChfVHSKWoRX_LSuA4whyfBZA"
}];

const ol = document.querySelector("ol");

const template = movies.map(movie => `
<li>
<p>Name: ${movie.name}</p>
<p>Year: ${movie.year}</p>
<p>Director: ${movie.director}</p>
<img src = ${movie.image}>
</li>
`);

ol.innerHTML = template.join("");
