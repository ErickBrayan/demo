package com.app.demo.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Table(name = "usuarios")
@Entity
public class Usuario {

    @Getter @Setter
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;
    @Getter @Setter
    private String nombre;
    @Getter @Setter
    private String apellido;
    @Getter @Setter
    private String email;
    @Getter @Setter
    private String telefono;
    @Getter @Setter
    private String password;

}
