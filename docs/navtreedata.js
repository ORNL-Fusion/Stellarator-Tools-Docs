/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Stellarator-Tools", "index.html", [
    [ "Introduction", "index.html#introduction", null ],
    [ "User manuals", "index.html#user", [
      [ "Model Manual.", "index.html#user_model", null ],
      [ "Equilibrium manuals.", "index.html#user_equilibirum", [
        [ "VMEC Equilibrium manuals.", "index.html#user_vmec_equilibirum", null ],
        [ "Vacuum Equilibrium manuals.", "index.html#user_vacuum_equilibirum", null ],
        [ "SIESTA Equilibrium manuals.", "index.html#user_siesta_equilibirum", null ]
      ] ],
      [ "Diagnostic input files.", "index.html#user_diagnostic", [
        [ "V3RFUN manual.", "index.html#user_v3rfun", null ],
        [ "LGIRD manual.", "index.html#user_lgrid", null ]
      ] ]
    ] ],
    [ "Programmer Manuals", "index.html#programmer", null ],
    [ "BMW", "md_BMW_README.html", null ],
    [ "Command Line Arguments", "bmw_cl_parsing_sec.html", [
      [ "Introduction", "bmw_cl_parsing_sec.html#bmw_cl_parsing_intro", null ],
      [ "Command Line Arguments", "bmw_cl_parsing_sec.html#bmw_cl_parsing_arg_sec", null ],
      [ "Programmers Reference", "bmw_cl_parsing_sec.html#bmw_cl_pasring_prog_ref_sec", null ]
    ] ],
    [ "BMW Result File", "result_file_bmw.html", [
      [ "Introduction", "result_file_bmw.html#result_file_bmw_intro_sec", null ],
      [ "Variables", "result_file_bmw.html#result_file_bmw_var_sec", null ]
    ] ],
    [ "BOOZ_XFORM", "md_BOOZ_XFORM_README.html", null ],
    [ "V3FIT Architecture", "architecture.html", [
      [ "Introducion", "architecture.html#architecture_intro", null ],
      [ "Class Objects", "architecture.html#architecture_class_objects", [
        [ "Equilibrium", "architecture.html#architecture_class_objects_equilibrium", [
          [ "VMEC", "architecture.html#architecture_class_objects_vmec_equilibrium", null ],
          [ "VACUUM", "architecture.html#architecture_class_objects_vacuum_equilibrium", null ]
        ] ],
        [ "Model", "architecture.html#architecture_class_objects_model", null ],
        [ "Parameter", "architecture.html#architecture_class_objects_parameter", null ],
        [ "Signal", "architecture.html#architecture_class_objects_signal", [
          [ "Diagnostic", "architecture.html#architecture_class_objects_diagnostic_signal", null ],
          [ "Geometric", "architecture.html#architecture_class_objects_geometric_signal", null ],
          [ "Prior", "architecture.html#architecture_class_objects_prior_signal", null ],
          [ "Combination Signals", "architecture.html#architecture_class_objects_combination_signal", null ]
        ] ],
        [ "Reconstruction", "architecture.html#architecture_class_objects_reconstruction", null ]
      ] ],
      [ "Other Objects", "architecture.html#architecture_class_objects_other", null ]
    ] ],
    [ "Stellarator-Tools Build System", "build_system.html", [
      [ "Introduction", "build_system.html#build_system_intro", null ],
      [ "Obtaining the code.", "build_system.html#build_system_clone", null ],
      [ "Configuring Build", "build_system.html#build_system_config", null ],
      [ "Makefile", "build_system.html#build_system_make", null ],
      [ "Dependencies", "build_system.html#build_system_dependencies", [
        [ "Libraries", "build_system.html#build_system_libraries", null ],
        [ "Sources", "build_system.html#build_system_sources", null ]
      ] ],
      [ "Documentation", "build_system.html#build_system_documentation", null ],
      [ "Testing", "build_system.html#build_system_testing", null ],
      [ "Running Cmake", "build_system.html#build_system_running", [
        [ "Cmake Variables", "build_system.html#build_system_cmake_variables", [
          [ "Built In Variables", "build_system.html#build_system_cmake_variables_builtin", null ],
          [ "Defined Variables", "build_system.html#build_system_cmake_variables_defined", null ]
        ] ]
      ] ],
      [ "Build Directory", "build_system.html#build_system_build_directory", null ],
      [ "Trouble Shooting", "build_system.html#build_system_trouble_shooting", null ]
    ] ],
    [ "Class Anatomy", "class_anatomy.html", [
      [ "Introduction", "class_anatomy.html#class_anatomy_intro", null ],
      [ "The Class Type", "class_anatomy.html#class_anatomy_type", [
        [ "Subclassing", "class_anatomy.html#class_anatomy_subclassing", null ]
      ] ],
      [ "Methods", "class_anatomy.html#class_anatomy_methods", [
        [ "Virtual Methods", "class_anatomy.html#class_anatomy_virtual_methods", null ],
        [ "Constructors", "class_anatomy.html#class_anatomy_constructers", [
          [ "Subclass Constructors", "class_anatomy.html#class_anatomy_constructers_subclass", null ],
          [ "Copy Constructors", "class_anatomy.html#class_anatomy_constructers_copy", null ]
        ] ],
        [ "Destructors", "class_anatomy.html#class_anatomy_destructers", null ],
        [ "Setters", "class_anatomy.html#class_anatomy_setters", null ],
        [ "Getters", "class_anatomy.html#class_anatomy_getters", null ]
      ] ]
    ] ],
    [ "Doxygen Documentation", "doxygen.html", [
      [ "Introduction", "doxygen.html#doxygen_introduction", null ],
      [ "Pages", "doxygen.html#doxygen_pages", [
        [ "Inline Pages", "doxygen.html#doxygen_inline_pages", null ],
        [ "External Pages", "doxygen.html#doxygen_external_pages", null ]
      ] ],
      [ "Doxygen Mark Up", "doxygen.html#doxygen_markup", [
        [ "Aliases", "doxygen.html#doxygen_markup_aliases", [
          [ "V3FIT Defined Aliases", "doxygen.html#doxygen_markup_v3fit_aliases", null ]
        ] ]
      ] ],
      [ "Documentation Generation", "doxygen.html#doxygen_generation", [
        [ "Configuration", "doxygen.html#doxygen_config", null ],
        [ "Defining Aliases", "doxygen.html#doxygen_config_aliases", null ]
      ] ]
    ] ],
    [ "Testing Framework Documentation", "testing.html", [
      [ "Introduction", "testing.html#testing_introduction", null ],
      [ "Unit Tests", "testing.html#testing_unit_tests", null ],
      [ "Regression Tests", "testing.html#testing_regression_tests", null ],
      [ "Cmake Test Framework", "testing.html#testing_cmake_framework", null ],
      [ "Running Tests", "testing.html#testing_cmake_running", [
        [ "Test Results", "testing.html#testing_cmake_results", null ]
      ] ]
    ] ],
    [ "LGRID", "md_LGRID_README.html", null ],
    [ "Limiter Gird File", "lgrid_sec.html", [
      [ "Introduction", "lgrid_sec.html#lgrid_intro_sec", null ],
      [ "Input Configuation", "lgrid_sec.html#lgrid_input_sec", [
        [ "Keywords", "lgrid_sec.html#lgrid_input_keyword_sec", null ],
        [ "Example File", "lgrid_sec.html#lgrid_input_exam_sec", null ]
      ] ],
      [ "Command Line Arguments", "lgrid_sec.html#lgrid_command_line_sec", null ]
    ] ],
    [ "LIBSTELL", "md_LIBSTELL_README.html", null ],
    [ "Namelist indata definition", "vmec_namelist_sec.html", [
      [ "Introduction", "vmec_namelist_sec.html#vmec_namelist_intro_sec", null ],
      [ "Namelist Variables", "vmec_namelist_sec.html#vmec_namelist_var_sec", [
        [ "Control Parameters.", "vmec_namelist_sec.html#vmec_control_param_sec", [
          [ "Precondicioner control parameters.", "vmec_namelist_sec.html#vmec_precon_control_param_sec", null ],
          [ "Early termination control parameters.", "vmec_namelist_sec.html#vmec_giveup_control_param_sec", null ],
          [ "Continue control parameters.", "vmec_namelist_sec.html#vmec_continue_control_param_sec", null ]
        ] ],
        [ "Control flags.", "vmec_namelist_sec.html#vmec_control_flags_sec", null ],
        [ "Radial parameters.", "vmec_namelist_sec.html#vmec_radial_parameters_sec", null ],
        [ "Fourier sizes.", "vmec_namelist_sec.html#vmec_fourier_sizes_sec", null ],
        [ "Real space grid sizes.", "vmec_namelist_sec.html#vmec_realspace_sizes_sec", null ],
        [ "External current parameters.", "vmec_namelist_sec.html#vmec_extcur_param_sec", null ],
        [ "Profile Parameters.", "vmec_namelist_sec.html#vmec_profile_param_sec", [
          [ "Current profile parameters.", "vmec_namelist_sec.html#vmec_current_profile_param_sec", null ],
          [ "Rotational transform profile parameters.", "vmec_namelist_sec.html#vmec_iota_profile_param_sec", null ],
          [ "Pressure profile parameters.", "vmec_namelist_sec.html#vmec_pres_profile_param_sec", null ]
        ] ],
        [ "Anisotropy parameters.", "vmec_namelist_sec.html#vmec_anisotropy_parameters_sec", null ],
        [ "Edge Boundary parameters.", "vmec_namelist_sec.html#vmec_edge_parameters_sec", null ],
        [ "Inital magnetic axis guess.", "vmec_namelist_sec.html#vmec_axis_parameters_sec", null ]
      ] ],
      [ "Example File.", "vmec_namelist_sec.html#vmec_namelist_example_sec", null ]
    ] ],
    [ "MAKEGRID", "md_MAKEGRID_README.html", null ],
    [ "VMEC", "md_PARVMEC_README.html", null ],
    [ "Command Line Arguments", "wout_diff_cl_parsing_sec.html", [
      [ "Introduction", "wout_diff_cl_parsing_sec.html#wout_diff_cl_parsing_intro", null ],
      [ "Command Line Arguments", "wout_diff_cl_parsing_sec.html#wout_diff_cl_parsing_arg_sec", null ],
      [ "Programmers Reference", "wout_diff_cl_parsing_sec.html#wout_diff_cl_pasring_prog_ref_sec", null ]
    ] ],
    [ "Stellarator-Tools", "md_README.html", [
      [ "Documentation", "md_README.html#autotoc_md7", null ],
      [ "Testing", "md_README.html#autotoc_md8", null ],
      [ "Compiling", "md_README.html#autotoc_md9", [
        [ "Touble Shooting", "md_README.html#autotoc_md10", null ]
      ] ]
    ] ],
    [ "SIESTA", "md_SIESTA_README.html", null ],
    [ "Discription of the SIESTA restart file.", "siesta_restart_sec.html", [
      [ "Introduction", "siesta_restart_sec.html#siesta_restart_intro_sec", null ],
      [ "Namelist Variables", "siesta_restart_sec.html#siesta_restart_var_sec", [
        [ "Control Flags", "siesta_restart_sec.html#siesta_restart_flag_sec", null ],
        [ "Dimension sizes.", "siesta_restart_sec.html#siesta_restart_size_sec", null ],
        [ "Normalization factors.", "siesta_restart_sec.html#siesta_restart_norm_fact_sec", null ],
        [ "Scalar quantities.", "siesta_restart_sec.html#siesta_restart_scalar_sec", null ],
        [ "1D profiles.", "siesta_restart_sec.html#siesta_restart_1D_arrays_sec", [
          [ "Internal arrays", "siesta_restart_sec.html#siesta_restart_internal_arrays_sec", null ],
          [ "Internal arrays asym.", "siesta_restart_sec.html#siesta_restart_internal_arrays_asym_sec", null ],
          [ "Grid arrays", "siesta_restart_sec.html#siesta_restart_grid_arrays_sec", null ],
          [ "Gird arrays asym.", "siesta_restart_sec.html#siesta_restart_grid_arrays_asym_sec", null ],
          [ "VMEC arrays.", "siesta_restart_sec.html#siesta_restart_vmec_arrays_sec", null ],
          [ "VMEC arrays asym.", "siesta_restart_sec.html#siesta_restart_vmec_arrays_asym_sec", null ],
          [ "Magnetic fields.", "siesta_restart_sec.html#siesta_restart_mag_arrays_sec", null ],
          [ "Magnetic fields.", "siesta_restart_sec.html#siesta_restart_mag_arrays_asym_sec", null ],
          [ "Pressure.", "siesta_restart_sec.html#siesta_restart_pres_arrays_sec", null ]
        ] ]
      ] ],
      [ "Programmers Reference", "siesta_restart_sec.html#siesta_restart_prog_ref_sec", null ]
    ] ],
    [ "Namelist siesta_main_nli definition", "siesta_namelist_sec.html", [
      [ "Introduction", "siesta_namelist_sec.html#siesta_namelist_intro_sec", null ],
      [ "Namelist Variables", "siesta_namelist_sec.html#siesta_namelist_var_sec", [
        [ "Control Flags", "siesta_namelist_sec.html#siesta_flag_sec", null ],
        [ "Algrothim Control Variables", "siesta_namelist_sec.html#siesta_algrothim_sec", null ],
        [ "Island Parameters", "siesta_namelist_sec.html#siesta_island_sec", null ],
        [ "Grid Sizes", "siesta_namelist_sec.html#siesta_grid_size_sec", [
          [ "Output Grid Sizes", "siesta_namelist_sec.html#siesta_grid_size_out_sec", null ]
        ] ],
        [ "File Names", "siesta_namelist_sec.html#siesta_file_name_sec", null ],
        [ "Test Controls", "siesta_namelist_sec.html#siesta_test_sec", null ]
      ] ],
      [ "Programmers Reference", "siesta_namelist_sec.html#siesta_namelist_prog_ref_sec", null ]
    ] ],
    [ "Command Line Arguments", "siesta_test_cl_parsing_sec.html", [
      [ "Introduction", "siesta_test_cl_parsing_sec.html#siesta_test_cl_parsing_intro", null ],
      [ "Command Line Arguments", "siesta_test_cl_parsing_sec.html#siesta_test_cl_parsing_arg_sec", null ],
      [ "Test names.", "siesta_test_cl_parsing_sec.html#siesta_test_cl_test_names_sec", null ],
      [ "Programmers Reference", "siesta_test_cl_parsing_sec.html#siesta_test_cl_pasring_prog_ref_sec", null ]
    ] ],
    [ "SURFACE", "md_SURFACE_README.html", null ],
    [ "Command Line Arguments", "surface_cl_parsing_sec.html", [
      [ "Introduction", "surface_cl_parsing_sec.html#surface_cl_parsing_intro", null ],
      [ "Command Line Arguments", "surface_cl_parsing_sec.html#surface_cl_parsing_arg_sec", null ],
      [ "Programmers Reference", "surface_cl_parsing_sec.html#surface_cl_pasring_prog_ref_sec", null ]
    ] ],
    [ "V3FIT", "md_V3FIT_README.html", null ],
    [ "Command Line Arguments", "cl_parsing_sec.html", [
      [ "Introduction", "cl_parsing_sec.html#cl_parsing_intro", null ],
      [ "Command Line Arguments", "cl_parsing_sec.html#cl_parsing_arg_sec", null ],
      [ "Programmers Reference", "cl_parsing_sec.html#cl_pasring_prog_ref_sec", null ]
    ] ],
    [ "ECE Diagnostic Dot File", "ece_dot_sec.html", [
      [ "Introduction", "ece_dot_sec.html#ece_dot_intro_sec", null ],
      [ "Keywords", "ece_dot_sec.html#ece_dot_key_sec", null ],
      [ "Chord Specification", "ece_dot_sec.html#ece_dot_chord_spec_sec", null ],
      [ "Example File", "ece_dot_sec.html#ece_dot_exam_sec", null ],
      [ "Programmers Reference", "ece_dot_sec.html#ece_dot_prog_ref_sec", null ]
    ] ],
    [ "Soft X-Ray Emission File Manual", "emission_file_sec.html", [
      [ "Introduction", "emission_file_sec.html#emission_file_intro_sec", null ],
      [ "File Contents", "emission_file_sec.html#emission_file_contents_sec", null ]
    ] ],
    [ "Inteferometry/Polarimetry Diagnostic Dot File", "intpol_dot_sec.html", [
      [ "Introduction", "intpol_dot_sec.html#intpol_dot_intro_sec", null ],
      [ "Keywords", "intpol_dot_sec.html#intpol_dot_key_sec", null ],
      [ "Chord Specification", "intpol_dot_sec.html#intpol_dot_chord_spec_sec", null ],
      [ "Example File", "intpol_dot_sec.html#intpol_dot_exam_sec", null ],
      [ "Programmers Reference", "intpol_dot_sec.html#intpol_dot_prog_ref_sec", null ]
    ] ],
    [ "Model Manual", "model_sec.html", [
      [ "Introduction", "model_sec.html#model_intro_sec", null ],
      [ "Model Reconstruction Parameters", "model_sec.html#model_recon_param_sec", null ],
      [ "Model Derived Parameters", "model_sec.html#model_derived_param_sec", null ],
      [ "Model Soft X-ray Emissivity", "model_sec.html#model_sxrem_sec", null ]
    ] ],
    [ "Model Result File", "result_file_model.html", [
      [ "Introduction", "result_file_model.html#result_file_model_intro_sec", null ],
      [ "Dimensions", "result_file_model.html#result_file_model_dim_sec", null ],
      [ "Variables", "result_file_model.html#result_file_model_var_sec", [
        [ "Model Profiles", "result_file_model.html#result_file_model_grid_sec", null ]
      ] ]
    ] ],
    [ "Motional Stark Effect Diagnostic Dot File", "mse_dot_sec.html", [
      [ "Introduction", "mse_dot_sec.html#mse_dot_intro_sec", null ],
      [ "Keywords", "mse_dot_sec.html#mse_dot_key_sec", null ],
      [ "Point Specification", "mse_dot_sec.html#mse_dot_point_spec_sec", null ],
      [ "Example File", "mse_dot_sec.html#mse_dot_exam_sec", null ],
      [ "Programmers Reference", "mse_dot_sec.html#mse_dot_prog_ref_sec", null ]
    ] ],
    [ "Profiles types.", "profile_sec.html", [
      [ "Introduction", "profile_sec.html#profile_namelist_intro_sec", null ],
      [ "Profile types", "profile_sec.html#profile_types_sec", [
        [ "none", "profile_sec.html#profile_none", null ],
        [ "two_power", "profile_sec.html#profile_two_power", null ],
        [ "two_power_gs", "profile_sec.html#profile_two_power_gs", null ],
        [ "two_power_r", "profile_sec.html#profile_two_power_r", null ],
        [ "power_series", "profile_sec.html#profile_power_series_gs", null ],
        [ "cubic_spline", "profile_sec.html#profile_cubic_spline", null ],
        [ "akima_spline", "profile_sec.html#profile_akima_spline", null ],
        [ "line_segment", "profile_sec.html#profile_line_segment", null ],
        [ "sq_exp_1d", "profile_sec.html#profile_sq_ecp", null ]
      ] ]
    ] ],
    [ "SIESTA Equilibrium Manual", "siesta_equilibrium_sec.html", [
      [ "Introduction", "siesta_equilibrium_sec.html#siesta_equilibrium_intro_sec", null ],
      [ "SIESTA Reconstruction Parameters", "siesta_equilibrium_sec.html#siesta_equilibrium_recon_param_sec", [
        [ "SIESTA Equilibrium Reconstruction Parameters", "siesta_equilibrium_sec.html#siesta_equilibrium_vmec_recon_param_sec", null ],
        [ "SIESTA Auxiliary Reconstruction Parameters", "siesta_equilibrium_sec.html#siesta_equilibrium_aux_recon_param_sec", null ]
      ] ]
    ] ],
    [ "SIESTA Result File", "result_file_siesta.html", [
      [ "Introduction", "result_file_siesta.html#result_file_siesta_intro_sec", null ],
      [ "Dimensions", "result_file_siesta.html#result_file_siesta_dim_sec", null ],
      [ "Variables", "result_file_siesta.html#result_file_siesta_var_sec", null ]
    ] ],
    [ "Soft X-Ray Diagnostic Dot File", "sxrem_dot_sec.html", [
      [ "Introduction", "sxrem_dot_sec.html#sxrem_dot_intro_sec", null ],
      [ "Keywords", "sxrem_dot_sec.html#sxrem_dot_key_sec", null ],
      [ "Chord Specification", "sxrem_dot_sec.html#sxrem_dot_chord_spec_sec", null ],
      [ "Example File", "sxrem_dot_sec.html#sxrem_dot_exam_sec", [
        [ "Two Color Example File", "sxrem_dot_sec.html#sxrem_dot_exam_two_color_sec", null ]
      ] ],
      [ "Programmers Reference", "sxrem_dot_sec.html#sxrem_dot_prog_ref_sec", null ]
    ] ],
    [ "Soft X-ray Emissivity Ratio Dot File", "sxrem_ratio_dot_sec.html", [
      [ "Introduction", "sxrem_ratio_dot_sec.html#sxrem_ratio_dot_intro_sec", null ],
      [ "Keywords", "sxrem_ratio_dot_sec.html#sxrem_ratio_dot_key_sec", null ],
      [ "Point Specification", "sxrem_ratio_dot_sec.html#sxrem_ratio_dot_chord_spec_sec", null ],
      [ "Example File", "sxrem_ratio_dot_sec.html#sxrem_ratio_dot_exam_sec", null ],
      [ "Programmers Reference", "sxrem_ratio_dot_sec.html#sxrem_ratio_dot_prog_ref_sec", null ]
    ] ],
    [ "Thomson Scattering Diagnostic Dot File", "thomson_dot_sec.html", [
      [ "Introduction", "thomson_dot_sec.html#thomson_dot_intro_sec", null ],
      [ "Keywords", "thomson_dot_sec.html#thomson_dot_key_sec", null ],
      [ "Chord Specification", "thomson_dot_sec.html#thomson_dot_chord_spec_sec", null ],
      [ "Example File", "thomson_dot_sec.html#thomson_dot_exam_sec", null ],
      [ "Programmers Reference", "thomson_dot_sec.html#thomson_dot_prog_ref_sec", null ]
    ] ],
    [ "Result File", "result_file_main.html", [
      [ "Introduction", "result_file_main.html#result_file_main_intro_sec", null ],
      [ "Dimensions", "result_file_main.html#result_file_main_dim_sec", [
        [ "Equilibrium Dimensions", "result_file_main.html#result_file_main_eq_dim_sec", null ]
      ] ],
      [ "Variables", "result_file_main.html#result_file_main_var_sec", [
        [ "Derived Parameter Variables", "result_file_main.html#result_file_main_dir_param_var_sec", null ],
        [ "Reconstruction Parameter Variables", "result_file_main.html#result_file_main_param_var_sec", null ],
        [ "Signal Variables", "result_file_main.html#result_file_main_sig_var_sec", null ],
        [ "Equilibrium Variables", "result_file_main.html#result_file_main_eq_var_sec", null ]
      ] ]
    ] ],
    [ "Namelist v3fit_main_nli definition", "namelist_sec.html", [
      [ "Introduction", "namelist_sec.html#namelist_intro_sec", null ],
      [ "Namelist Variables", "namelist_sec.html#namelist_var_sec", [
        [ "Filename variables", "namelist_sec.html#filename_sec", [
          [ "Equilibrium Filename variables", "namelist_sec.html#eq_filename_sec", null ],
          [ "Signal Filename variables", "namelist_sec.html#signal_filename_sec", null ]
        ] ],
        [ "Array allocation sizes, numbers to allocate", "namelist_sec.html#size_sec", null ],
        [ "Task specification, work variables", "namelist_sec.html#work_sec", null ],
        [ "Model profile specification", "namelist_sec.html#model_profile_sec", null ],
        [ "Model Specification Variables", "namelist_sec.html#model_spec_sec", null ],
        [ "Reconstruction constraints (DEPRECATED)", "namelist_sec.html#recon_con_sec", null ],
        [ "Derived parameter specification", "namelist_sec.html#derived_param_sec", null ],
        [ "Reconstruction parameter specification", "namelist_sec.html#recon_param_sec", null ],
        [ "Locking parameter specification", "namelist_sec.html#lock_param_sec", null ],
        [ "Signal Data specification", "namelist_sec.html#signal_spec_sec", [
          [ "Signal Data sigma specification", "namelist_sec.html#sigma_spec_sec", null ],
          [ "Signal Data weight specification", "namelist_sec.html#weight_spec_sec", null ],
          [ "Magnetic signal specification", "namelist_sec.html#magnetic_spec_sec", null ],
          [ "Signal Scale Factor Specification", "namelist_sec.html#sfactor_spec_sec", null ],
          [ "Signal Offset Specification", "namelist_sec.html#soffset_spec_sec", null ]
        ] ],
        [ "Magnetic signal parameters", "namelist_sec.html#magnetic_sec", null ],
        [ "These two are used by the extcurz diagnostic signal.", "namelist_sec.html#extcurz_sec", null ],
        [ "Geometric information", "namelist_sec.html#geometric_sec", [
          [ "Limiter_Iso Function.", "namelist_sec.html#lif_sec", null ]
        ] ],
        [ "Prior information", "namelist_sec.html#prior_sec", null ],
        [ "Guassian process signal variables", "namelist_sec.html#gp_sec", null ],
        [ "COOSIG - Combination Of Other SIGnals NLI Variables", "namelist_sec.html#coosig_sec", null ],
        [ "Plasma Offset Section", "namelist_sec.html#plasma_off_sec", null ],
        [ "Reconstruction step control NLI variables", "namelist_sec.html#recon_sec", null ],
        [ "Integration parameters", "namelist_sec.html#int_sec", null ],
        [ "VMEC zero out xcdot control", "namelist_sec.html#xcdot_sec", null ]
      ] ],
      [ "Example Files", "namelist_sec.html#namelist_exam_sec", [
        [ "V3POST Example", "namelist_sec.html#namelist_exam_v3post_sec", null ],
        [ "Reconstruction Example", "namelist_sec.html#namelist_exam_reconstruction_sec", null ]
      ] ],
      [ "Programmers Reference", "namelist_sec.html#namelist_prog_ref_sec", null ]
    ] ],
    [ "Vacuum Equilibrium Manual", "vacuum_equilibrium_sec.html", [
      [ "Introduction", "vacuum_equilibrium_sec.html#vacuum_equilibrium_model_intro_sec", null ],
      [ "Vacuum Reconstruction Parameters", "vacuum_equilibrium_sec.html#vacuum_equilibrium_recon_param_sec", null ]
    ] ],
    [ "Namelist vacuum_main_nli definition", "vacuum_namelist_sec.html", [
      [ "Introduction", "vacuum_namelist_sec.html#vacuum_namelist_intro_sec", null ],
      [ "Namelist Variables", "vacuum_namelist_sec.html#vacuum_namelist_var_sec", [
        [ "Filename variables", "vacuum_namelist_sec.html#vacuum_filename_sec", null ],
        [ "Array allocation sizes.", "vacuum_namelist_sec.html#vacuum_size_sec", null ],
        [ "Equilibrium variables", "vacuum_namelist_sec.html#vacuum_eq_var_sec", null ],
        [ "Shifts and rotations of external coils.", "vacuum_namelist_sec.html#vacuum_sr_var_sec", null ]
      ] ],
      [ "Example Files", "vacuum_namelist_sec.html#vacuum_namelist_exam_sec", null ],
      [ "Programmers Reference", "vacuum_namelist_sec.html#vacuum_namelist_prog_ref_sec", null ]
    ] ],
    [ "VMEC Equilibrium Manual", "vmec_equilibrium_sec.html", [
      [ "Introduction", "vmec_equilibrium_sec.html#vmec_equilibrium_intro_sec", null ],
      [ "VMEC Reconstruction Parameters", "vmec_equilibrium_sec.html#vmec_equilibrium_recon_param_sec", [
        [ "VMEC Equilibrium Reconstruction Parameters", "vmec_equilibrium_sec.html#vmec_equilibrium_vmec_recon_param_sec", null ],
        [ "VMEC Auxiliary Reconstruction Parameters", "vmec_equilibrium_sec.html#vmec_equilibrium_aux_recon_param_sec", null ]
      ] ],
      [ "VMEC Derived Parameters", "vmec_equilibrium_sec.html#vmec_equilibrium_derive_param_sec", null ]
    ] ],
    [ "VMEC Result File", "result_file_vmec.html", [
      [ "Introduction", "result_file_vmec.html#result_file_vmec_intro_sec", null ],
      [ "Dimensions", "result_file_vmec.html#result_file_vmec_dim_sec", null ],
      [ "Variables", "result_file_vmec.html#result_file_vmec_var_sec", null ]
    ] ],
    [ "V3RFUN", "md_V3RFUN_README.html", null ],
    [ "Magnetic Diagnostic Dot File", "diagnostic_dot_sec.html", [
      [ "Introduction", "diagnostic_dot_sec.html#diagnostic_dot_intro_sec", null ],
      [ "Diagnostic Coil Specification", "diagnostic_dot_sec.html#diagnostic_dot_coil_spec_sec", null ],
      [ "Keywords", "diagnostic_dot_sec.html#diagnostic_dot_key_sec", null ],
      [ "Programmers Reference", "diagnostic_dot_sec.html#diagnostic_dot_prog_ref_sec", null ]
    ] ],
    [ "Command Line Arguments", "v3rfun_cl_parsing_sec.html", [
      [ "Introduction", "v3rfun_cl_parsing_sec.html#v3rfun_cl_parsing_intro", null ],
      [ "Command Line Arguments", "v3rfun_cl_parsing_sec.html#v3rfun_cl_parsing_arg_sec", null ],
      [ "Programmers Reference", "v3rfun_cl_parsing_sec.html#v3rfun_cl_pasring_prog_ref_sec", null ]
    ] ],
    [ "Namelist v3r_coils definition", "v3rfun_namelist_sec.html", [
      [ "Introduction", "v3rfun_namelist_sec.html#v3rfun_namelist_intro_sec", null ],
      [ "Namelist Variables", "v3rfun_namelist_sec.html#v3rfun_namelist_var_sec", [
        [ "Filename Variables", "v3rfun_namelist_sec.html#v3rfun_filename_sec", null ],
        [ "Control Variables", "v3rfun_namelist_sec.html#v3rfun_control_sec", null ],
        [ "Super Conducting Coils", "v3rfun_namelist_sec.html#v3rfun_super_sec", null ],
        [ "Response Grid Variables", "v3rfun_namelist_sec.html#v3rfun_grid_sec", null ],
        [ "Tilt and Shift Variables", "v3rfun_namelist_sec.html#v3rfun_shift_sec", null ]
      ] ],
      [ "Example File", "v3rfun_namelist_sec.html#v3r_coils", null ],
      [ "Programmers Reference", "v3rfun_namelist_sec.html#v3rfun_namelist_prog_ref_sec", null ]
    ] ],
    [ "Deprecated List", "deprecated.html", null ],
    [ "Todo List", "todo.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", "namespacemembers_dup" ],
        [ "Functions", "namespacemembers_func.html", "namespacemembers_func" ],
        [ "Variables", "namespacemembers_vars.html", "namespacemembers_vars" ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Functions", "globals_func.html", null ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"SURFACE_2Sources_2surface_8f.html",
"blocktridiagonalsolver__bst_8f90.html#aaa629b828eb36e9edd1cc2a193c3dc45",
"bsc__T_8f.html#ade19dae1a1b096e6b65f7a5b84c68b55",
"classsiesta__quantities.html#a75d7bef24419fa90067c88fc47be1562",
"descriptor__mod_8f90.html#a4411b1df48ceddd7ee6dd32cc545ca36",
"ezcdf__GenGet_8f90.html#a271d3f5c3d3630f58dee7895b7f5f502",
"functions_vars_h.html",
"interfacebsc__t_1_1bsc__destroy.html#abd98209067d77bf4063908737c24fe40",
"interfaceezspline_1_1ezspline__isindomain.html#ae681c1af196f55da537f3880dad56805",
"interfacepspline__calls_1_1cspevx.html#a466b4267f94e1bc551608ef0e2d557a9",
"interfacepspline__calls_1_1r8herm1x.html#aad207b6cff778a86a8e5bf07c3fd1927",
"interfaceutilities_1_1curl__htof.html",
"makegrid__global_8f.html#ac9fbe29c9b0e92f57c54e4630fa5baef",
"mgrid__mod_8f.html#af440a7fd426d4eb0ffa173ad8936514e",
"namespaceblocktridiagonalsolver.html#a0c3721fec40f9d978411edbf72e625fb",
"namespaceblocktridiagonalsolver__s.html#ab46fb908cbfa1e43d14d7ea50984258c",
"namespaceequilibrium.html#ab11a58272050c4781b094ac7dd37fa57",
"namespacemagnetic__response.html#a8293da9b59bf6661dcc63c58c87c856f",
"namespacenetcdf__inc.html#a3359b8d6f8f6e7e9b30130d6e05a4bf3",
"namespacerestart__mod.html#aa1f1bcc913fe599488bb6ab9301c49e4",
"namespacesiesta__pressure.html#a7c4ad4ede03c93bc7e5ad31ccdfa9f50",
"namespacev3fit__input.html#a82605442d5d24ccb42c4e0b82ca8764b",
"namespacevmec__equilibrium.html#a5851534253f23e5c91873d4651850e36",
"netcdf__inc_8f.html#a517c2bfd3d513d1b8089a068946312b4",
"optim__params_8f.html#a85c837fea19971a912220e2bdd666312",
"parallel__vmec__module_8f90.html#a4fdeca9e306ae28ff18f158e46b24d52",
"prof__mod_8f90.html#ad2eeada7e2bcb7d07fa17ead132428bd",
"reconstruction_8f.html#a8592936bc0d810a89a8119dd0fcb4304",
"shared__data_8f90.html#a6dfe77af64d8bba5bf6ba9d2d055bbcd",
"signal__dot_8f.html#a38445b891851d3d4e0379d0f90e302e4",
"structcommandline__parser_1_1commandline__parser__class.html#ad72187ce7568bf36703cfb39e04ca288",
"structezspline__type_1_1ezspline3__r4.html#a14f162eebf561b159af82b234ea342a8",
"structlimiter__iso__t_1_1limiter__iso__class.html#adcb408ec105da81528de645b7a45272f",
"structread__response_1_1prfun.html#a28c0a4feefec0297d94bc90a394dbace",
"structsurface__commandline__parser_1_1surface__commandline__parser__class.html#a47368a32272e61930dff5409a0a43479",
"structvmec__equilibrium_1_1vmec__class.html#a157fbab396bdb584626b529b4311a8e1",
"thomson_8f.html#a1cc5dc0ccb2d5b512af08205eca1e16b",
"v3__utilities_8f.html#a79579d7d8c79ec3473ec8d9bfa829870",
"v3fita_8f.html#a92499480850f3300c0f265efd3b83b1d",
"vacmod0_8f.html#a44567911ba1acbbd44fa39cc6059fbd1",
"vmec__equilibrium_8f.html#a2f39021e1aa97b9da18694fe73dcee02",
"vmec__input_8f.html#ac49d3b079e02e00614aa6962c403ee57",
"vmec__persistent_8f.html#a7143cae1753a77d4e017a9e8b35fd490",
"xstuff_8f.html#ac43a2c28e9dcb262b94b95518c2b0746"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';